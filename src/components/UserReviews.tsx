import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: any;
  lang?: string;
}

interface UserReviewsProps {
  gameId: number;
}

const UserReviews: React.FC<UserReviewsProps> = ({ gameId }) => {
  const { t, i18n } = useTranslation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Helper to map lang codes to flags
  const getFlag = (lang?: string) => {
    switch (lang?.split('-')[0]) {
      case 'ko': return '🇰🇷';
      case 'de': return '🇩🇪';
      case 'en': return '🇺🇸';
      default: return '🌐';
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, 'userReviews'),
      where('gameId', '==', gameId),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData: Review[] = [];
      querySnapshot.forEach((doc) => {
        reviewsData.push({ id: doc.id, ...doc.data() } as Review);
      });
      setReviews(reviewsData);
    });

    return () => unsubscribe();
  }, [gameId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !comment) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'userReviews'), {
        gameId,
        userName,
        rating,
        comment,
        lang: i18n.language, // Automatically detect and store the current language
        createdAt: serverTimestamp(),
      });
      setUserName('');
      setComment('');
      setRating(5);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("Failed to submit review. Check Firebase permissions.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="user-reviews-section">
      <hr />
      <h3>{t('reviews.userReviewsTitle', 'User Reviews')}</h3>
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <input 
            type="text" 
            placeholder={t('reviews.namePlaceholder', 'Your Name')} 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[5, 4, 3, 2, 1].map(n => (
              <option key={n} value={n}>{n} {t('reviews.stars', 'Stars')}</option>
            ))}
          </select>
        </div>
        <textarea 
          placeholder={t('reviews.commentPlaceholder', 'Leave your review here...')} 
          value={comment} 
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit" disabled={submitting} className="cta-button">
          {submitting ? t('reviews.submitting', 'Submitting...') : t('reviews.submitReview', 'Post Review')}
        </button>
      </form>

      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p className="no-reviews">{t('reviews.noReviews', 'No reviews yet. Be the first to review!')}</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="user-review-item">
              <div className="review-header">
                <div className="user-info">
                  <strong>{rev.userName}</strong>
                  <span className="lang-flag" title={rev.lang}>{getFlag(rev.lang)}</span>
                </div>
                <span className="user-rating">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</span>
              </div>
              <p>{rev.comment}</p>
              <small>{rev.createdAt?.toDate().toLocaleDateString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserReviews;
