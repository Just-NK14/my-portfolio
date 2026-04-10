import { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/portfolioService';

const initialSkeleton = {
    contact: [], experience: [], projects: [], 
    achievements: [], education: [], skills: {},
    additionalDetails: [{ type: 'leetcode', value: '...' }, { type: 'languages', value: '...' }]
};

export function usePortfolio() {
    const [portfolioData, setPortfolioData] = useState(initialSkeleton);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const data = await fetchPortfolioData();
                if (data) {
                    setPortfolioData({ ...initialSkeleton, ...data });
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getDetails();
    }, []);

    return { portfolioData, loading, error };
}