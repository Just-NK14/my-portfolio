// src/data.js
export const portfolioData = {
    contact: [
        { type: 'phone', value: '+91 9182181223' },
        { type: 'email', value: 'navaneethkrishna.bondada@srmap.edu.in' },
        { type: 'leetcode', value: 'navaneeth1411' }
    ],
    experience: [
        {
            role: 'Software Development Engineer Intern',
            company: 'PayPal',
            period: 'June 2025 - August 2025',
            description: [
                'Spearheaded development for **CRISPR**, an AI-powered agent designed to automate developer workflows by autonomously generating and tuning queries.',
                'Engineered enhancements for the CRISPR system to intelligently interpret and act upon code review feedback, automatically applying changes.',
                'Played a key role in the creation of **COPTR Pilot**, a GenAI chatbot, by integrating it with internal cloud services and Jira to deliver persona-based insights.',
                'Collaborated with a cross-functional team to design and deploy AI solutions, contributing to an estimated ROI of **$150K** through workflow automation.'
            ]
        },
    ],
    projects: [
        {
            title: 'CRISPR (COPTR Recommendations)',
            category: 'AI / DevOps | PayPal',
            tags: ['Python', 'AI', 'Git', 'Claude', 'Go', 'Rancher'],
            summary: 'Automates the code review process by generating pull requests with query-tuning recommendations and addressing reviewer feedback.',
            link: '#',
            details: {
                'Innovation & Complexity': 'Developed an AI-powered agent that autonomously raises pull requests with optimized queries and interacts with reviewers to address feedback.',
                'Documentation': "Comprehensive documentation detailing the agent's functionality, integration steps, and impact metrics.",
                'Outcomes': [
                    'Automated generation of pull requests with query optimizations.',
                    'Reduced manual intervention in code reviews, accelerating development cycles.',
                    'Demonstrated practical application of AI in enterprise workflows.'
                ]
            }
        },
        {
            title: 'Crypto MCP Server',
            category: 'Real-time Systems | Personal',
            tags: ['Python', 'AI', 'LLM', 'Plotly'],
            summary: 'Provides real-time cryptocurrency data to LLMs, enabling AI agents to fetch live prices and generate visual insights.',
            link: 'https://github.com/Just-NK14/crypto_mcp/tree/develop',
            details: {
                'Innovation & Complexity': 'Developed a Model Context Protocol (MCP) server that integrates live data retrieval with LLMs for intelligent analysis.',
                'Outcomes': [
                    'Enables LLMs to access and visualize live cryptocurrency data.',
                    'Showcases skills in AI integration and real-time data handling.',
                ]
            }
        },
        {
            title: 'COPTR Pilot',
            category: 'AI Chatbot | PayPal Hackathon',
            tags: ['Python', 'AI', 'Jira', 'GenAI', 'Slack'],
            summary: 'Provides teams with actionable insights on cloud usage while simplifying task management by raising Jira tickets via chat.',
            link: '#',
            details: {
                'Industry Validation': 'First Runner-up at PayPal’s CDP GenAI Hackathon; demonstrates practical enterprise tool integration.',
                'Outcomes': [
                    'Simplified cloud resource management and Jira ticket automation.',
                    'Showcased AI and NLP integration in a full-stack application.',
                ]
            }
        }
    ],
    achievements: [
        {
            title: 'Received Pre-Placement Offer (PPO)',
            organization: 'PayPal',
            date: 'August 2025',
            description: 'Offered full-time Software Development Engineer role following a high-impact summer internship.'
        },
        {
            title: 'CDP GenAI Hackathon | 1st Runner-up',
            organization: 'PayPal',
            date: 'June 2025',
            description: 'Built a persona-based AI chatbot for cloud insights and Jira automation.'
        },
        {
            title: '9Hacks Hackathon | Top 3',
            organization: 'Next Tech Lab',
            date: 'April 2024',
            description: 'Developed backend infrastructure for a large-scale laundry automation platform.'
        }
    ],
    education: [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'SRM AP University',
            period: '2022 – 2026',
            details: 'CGPA: 9.07',
        }
    ],
    skills: {
        'Languages': [
            { name: 'Python', proficiency: 'Professional' },
            { name: 'Java', proficiency: 'Professional' },
            { name: 'C/C++', proficiency: 'Professional' },
            { name: 'JavaScript', proficiency: 'Advanced' },
            { name: 'Go', proficiency: 'Advanced' },
        ],
        'Development': [
            { name: 'Node.js', proficiency: 'Advanced' },
            { name: 'React.js', proficiency: 'Advanced' },
            { name: 'Next.js', proficiency: 'Intermediate' },
            { name: 'PostgreSQL', proficiency: 'Intermediate' },
        ],
        'AI / ML': [
            { name: 'GenAI', proficiency: 'Advanced' },
            { name: 'LLM', proficiency: 'Advanced' },
            { name: 'scikit-learn', proficiency: 'Intermediate' },
        ]
    },
    additionalDetails: [
        { label: 'LeetCode', value: 'navaneeth1411 (1643 Rating)' },
        { label: 'Languages', value: 'English (Fluent), Hindi (Fluent), Telugu (Native)' }
    ]
};