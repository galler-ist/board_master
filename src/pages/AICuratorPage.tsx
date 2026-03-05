import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getGameDetails } from '../services/bggService';
import type { BGGGameDetails } from '../services/bggService';

interface Recommendation {
  name: string;
  bggId: number;
  reason: string;
}

interface AIResponse {
  recommendations: Recommendation[];
  message: string;
}

const AICuratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [gameDetails, setGameDetails] = useState<Record<number, BGGGameDetails>>({});

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);
    setGameDetails({});

    try {
      const response = await fetch('/api/curator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error('AI recommendation failed');
      
      const data: AIResponse = await response.json();
      setResult(data);

      // Fetch BGG details for each recommendation to show images
      const details: Record<number, BGGGameDetails> = {};
      for (const rec of data.recommendations) {
        if (rec.bggId) {
          const gameData = await getGameDetails(rec.bggId);
          if (gameData) details[rec.bggId] = gameData;
        }
      }
      setGameDetails(details);

    } catch (error) {
      console.error("AI Curator error:", error);
      alert("AI 큐레이터가 잠시 쉬고 있습니다. 나중에 다시 시도해주세요!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-curator-page container">
      <Helmet>
        <title>AI Board Game Curator | Board Master</title>
      </Helmet>

      <section className="curator-hero">
        <h1>✨ AI Board Game Curator</h1>
        <p>Tell me what kind of gaming experience you're looking for, and I'll find the perfect match!</p>
      </section>

      <form onSubmit={handleAskAI} className="ai-input-section">
        <textarea
          placeholder="e.g., '3 players, strategy game, about 1 hour, easy to learn but hard to master'"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="cta-button ai-btn" disabled={loading}>
          {loading ? 'Consulting the experts...' : 'Get Recommendations ✨'}
        </button>
      </form>

      {result && (
        <div className="ai-results-section">
          <p className="ai-message">{result.message}</p>
          <div className="recommendations-grid">
            {result.recommendations.map((rec, idx) => {
              const bgg = gameDetails[rec.bggId];
              return (
                <div key={idx} className="ai-rec-card">
                  {bgg && (
                    <div className="ai-rec-image">
                      <img src={bgg.image} alt={bgg.name} />
                    </div>
                  )}
                  <div className="ai-rec-info">
                    <h3>{rec.name}</h3>
                    <p className="ai-reason">"{rec.reason}"</p>
                    <Link to={`/games/${rec.bggId}`} className="read-more">
                      Details & Reviews &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AICuratorPage;
