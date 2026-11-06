/**
 * Conference Presentation Speech, Slide Transcripts & Technical Q&A Guide
 * Extracted and aligned directly from ACROSET 2026 Paper 272 presentation speech script (speech.tex).
 * Lead Presenter: Slock Ahuja | Supervisor: Prof. Dr. Praveen Kumar Sharma
 */

export interface SlideSpeechData {
  slideId: string;
  slideNumber: number;
  title: string;
  duration: string;
  keyBullets: string[];
  spokenScript: string;
  transitionCue: string;
}

export interface TechnicalQAItem {
  id: number;
  question: string;
  answer: string;
  category: 'PPO & RL' | 'NTN Architecture' | 'Simulation & Dataset' | 'Results & Benchmarks';
  keyTakeaway: string;
}

export const slideSpeeches: Record<number, SlideSpeechData> = {
  0: {
    slideId: 'title',
    slideNumber: 1,
    title: 'Title & Team Introduction',
    duration: '1.5 min',
    keyBullets: [
      'Welcome attendees and introduce paper title',
      'Cite IEEE ACROSET 2026 and Paper ID: 272',
      'Acknowledge Marwadi University & co-author team (Dr. Praveen Kumar Sharma, Dr. C.D. Parmar, Indu Jaiswal)',
      'Frame the core 6G NTN resource challenge across space-to-ground dimensions'
    ],
    spokenScript: `Good morning everyone. It is my pleasure to present our research work titled, "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems." This is Paper ID 272 for IEEE ACROSET 2026. My name is Slock Ahuja, and I am representing the Department of Information and Communication Technology at Marwadi University, Gujarat, India. 

Today, I will be discussing one of the most critical challenges for the upcoming 6G era: how to intelligently manage limited network resources across a highly dynamic, three-dimensional architecture that spans from the ground all the way to space. This research was conducted collaboratively with my esteemed mentors at Marwadi University: Prof. Dr. Praveen Kumar Sharma, Dr. C. D. Parmar, and Indu Jaiswal.`,
    transitionCue: 'Let us examine the fundamental limitations of traditional terrestrial infrastructure and why space-air-ground integration is mandatory.'
  },

  1: {
    slideId: 'problem',
    slideNumber: 2,
    title: 'Research Problem & Dynamic 6G NTN Challenges',
    duration: '2.0 min',
    keyBullets: [
      'Terrestrial networks leave vast geographical coverage blackouts (oceans, mountains, disaster zones)',
      'LEO satellites move at ~7.5 km/s, creating severe Doppler shifts and 5-10 minute visibility windows',
      'Slant path lengths vary from 550 km to >1500 km with heavy rain fade and Rician shadowing',
      'Joint multi-resource optimization is NP-hard under traditional rule-based algorithms'
    ],
    spokenScript: `Terrestrial base stations provide dense local capacity, but economic and physical barriers leave oceans, aircraft corridors, rural valleys, and disaster zones with zero coverage. Integrating Non-Terrestrial Networks—specifically Low Earth Orbit (LEO) constellations and High Altitude Platform Stations (HAPS)—is mandatory for ubiquitous 6G.

However, LEO satellites move at approximately 7.5 kilometers per second. This rapid orbital kinematics causes severe Doppler shifts, short 5-to-10 minute visibility windows, and frequent handovers. Furthermore, slant distance variations from 550 km to over 1500 km create drastic channel attenuation. Traditional rule-based heuristics cannot handle this continuous multi-dimensional fluctuation in real time.`,
    transitionCue: 'To solve this NP-hard problem dynamically, we developed an intelligent Deep Reinforcement Learning framework powered by Proximal Policy Optimization.'
  },

  2: {
    slideId: 'ai-ppo',
    slideNumber: 3,
    title: 'Methodology: PPO Deep Reinforcement Learning Agent',
    duration: '2.5 min',
    keyBullets: [
      'PPO chosen for mathematical stability in continuous action spaces with clipped surrogate objective',
      'State Space: Channel State Information (CSI), user mobility, 3D topology, spectrum backlogs, and QoS profiles',
      'Action Space: Joint user association, spot-beam frequency assignment, and water-filling power control',
      'Reward Function: Heavy reward for spectral efficiency and URLLC QoS; penalties for latency, power, and ping-pong handovers'
    ],
    spokenScript: `We formulated the dynamic resource allocation as a continuous reinforcement learning task. We specifically chose Proximal Policy Optimization (PPO) because of its exceptional stability in continuous action spaces. Unlike traditional algorithms, PPO uses a clipped surrogate objective that prevents catastrophic policy degradation.

At every time slot, our PPO agent observes the 3D network state: including real-time Channel State Information, user coordinates, remaining orbital dwell time, Doppler frequency offsets, and traffic queue backlogs. 

The Actor-Critic network outputs joint decisions across three dimensions: user association (predicting handovers before link drop), subcarrier channel allocation (mitigating co-channel interference), and adaptive transmission power. The reward function maximizes throughput and QoS while penalizing packet loss and handover latency.`,
    transitionCue: 'Now let us step directly into our live interactive simulation engine to see this PPO agent in real-time operation.'
  },

  3: {
    slideId: 'live-demo',
    slideNumber: 4,
    title: 'Live Interactive NTN-6G Simulation Testbed',
    duration: '2.5 min',
    keyBullets: [
      '500 km × 500 km simulation area with 50-500 users, 6-50 LEO satellites, HAPS, and gNBs',
      '5 terrain zones: Urban Smart City, Rural, Maritime Shipping, Remote Mountain, Disaster Relief',
      'Demonstrate PPO AI ON vs OFF: eliminating beam collisions and ping-pong handovers',
      'Real-time link inspector: instantaneous SINR, Rician fading, and Doppler telemetry'
    ],
    spokenScript: `Here on screen is our live interactive simulation testbed. We model a 500 by 500 kilometer area containing distributed ground user clusters across five distinct zones: Urban smart cities, rural communities, maritime shipping corridors, remote mountains, and disaster relief zones.

In the canvas above, you can see LEO satellites traversing their orbital paths at 550 km altitude. Notice the dynamic spot-beams. When we run the baseline greedy algorithm, co-channel interference spikes in dense urban clusters and users near beam edges suffer ping-pong handovers. 

When we engage the PPO AI Agent, watch how the beams dynamically steer power to high-priority URLLC disaster streams, proactively execute seamless handovers, and allocate orthogonal carrier slots, achieving near-zero collision.`,
    transitionCue: 'Let us now look at the empirical quantitative results achieved across our 12,000-sample research benchmark.'
  },

  4: {
    slideId: 'results',
    slideNumber: 5,
    title: 'Experimental Research Results & Comparative Benchmarks',
    duration: '2.0 min',
    keyBullets: [
      'Average Throughput: 2587.56 Mbps vs 2253.55 Mbps baseline (+14.82% capacity increase)',
      'Packet Loss Rate: Reduced from 8.0% to 3.0% (-62.50% loss drop under surge traffic)',
      'Handover Latency: Slashed from 55 ms to 30 ms (-45.45% latency drop)',
      'Scalability: Maintains robust throughput fairness up to 500+ concurrent ground nodes'
    ],
    spokenScript: `We evaluated our proposed PPO agent across a verified synthetic dataset of 12,000 realistic NTN communication samples. 

As shown in these benchmark cards, the proposed AI framework achieves an average system throughput of 2587.56 Mbps, compared to 2253.55 Mbps for the baseline rule-based greedy algorithm—representing a 14.82% capacity improvement. 

Even more critically for 6G reliability: our AI agent cuts the packet loss rate from 8.0% down to 3.0%, a 62.5% reduction. Furthermore, by predicting upcoming beam exits rather than reacting after link failure, handover latency is reduced from 55 milliseconds to just 30 milliseconds—a 45.45% reduction.`,
    transitionCue: 'To conclude our presentation, let us summarize the core engineering contributions and future outlook.'
  },

  5: {
    slideId: 'conclusion',
    slideNumber: 6,
    title: 'Conclusion & Key Takeaways',
    duration: '1.5 min',
    keyBullets: [
      'Successfully demonstrated an intelligent PPO framework for multi-tier space-air-ground 6G NTN',
      'Jointly optimized power, spectrum, and association in continuous time under realistic 3GPP channels',
      'Significantly outperforms baseline greedy algorithms in throughput, packet loss, and handover delay',
      'Open to research collaboration on 6G NTN and deep reinforcement learning'
    ],
    spokenScript: `In conclusion, integrating Non-Terrestrial Networks with terrestrial 6G requires moving away from static, reactive rule-based heuristics toward intelligent, predictive reinforcement learning. 

Our proposed PPO framework dynamically tracks 3D kinematics, channel fading, and user traffic, delivering verified double-digit throughput gains and cutting latency and packet loss by nearly half.

We would like to thank IEEE ACROSET 2026, the reviewers, and Marwadi University for supporting this work. I am now very happy to open the floor for technical questions and discussion. Thank you!`,
    transitionCue: 'Ready for reviewer and audience Q&A.'
  }
};

export const technicalQAList: TechnicalQAItem[] = [
  {
    id: 1,
    category: 'PPO & RL',
    question: 'Why did you specifically choose PPO for this resource management problem?',
    answer: 'We selected Proximal Policy Optimization because it offers superior training stability compared to traditional RL algorithms like DQN or vanilla Policy Gradients. In an NTN environment, actions like transmit power control and beamforming weights are continuous, and PPO handles continuous action spaces exceptionally well. Its clipped surrogate objective prevents destructive policy updates, ensuring smooth convergence under volatile channel conditions.',
    keyTakeaway: 'PPO handles continuous power/beam control stably via its clipped surrogate objective.'
  },
  {
    id: 2,
    category: 'PPO & RL',
    question: 'Why is reinforcement learning more suitable here than traditional convex optimization?',
    answer: 'Traditional convex optimization techniques (like water-filling or Lagrangian relaxation) require full prior knowledge of instantaneous channel conditions and are computationally prohibitive in real-time ($O(N^3)$). In contrast, NTN environments have fast-moving satellites (~7.5 km/s) and fluctuating rain fade. A trained PPO neural network evaluates decisions in single-millisecond inference time without running heavy iterative solvers.',
    keyTakeaway: 'Sub-millisecond neural inference vs computationally intractable convex solvers in real time.'
  },
  {
    id: 3,
    category: 'PPO & RL',
    question: 'What exactly constitutes the state space in your PPO model?',
    answer: 'Our state vector $S_t$ consists of: (1) Channel State Information (CSI) with large-scale path loss and Rician fading, (2) User geographic coordinates $(Lat_u, Lon_u)$ and mobility vectors, (3) 3D constellation topology $(Lat_s, Lon_s, Alt_s)$, (4) Remaining orbital dwell time before beam exit, (5) Transmit power levels and frequency channel availability, and (6) Buffer queue lengths and QoS traffic classes (URLLC vs eMBB).',
    keyTakeaway: 'Full 11-dimension telemetry: CSI, coordinates, dwell time, frequency occupancy, and QoS demands.'
  },
  {
    id: 4,
    category: 'PPO & RL',
    question: 'What is the action space for the agent?',
    answer: 'The action space $A_t$ jointly dictates: (1) Discrete satellite-to-user link association (which satellite/HAPS tier the ground terminal links to), (2) Subcarrier channel frequency slot assignment from the 100 MHz pool, (3) Continuous transmission RF power level $P_{tx} \\in [0, 1.0\\text{ W}]$, and (4) Handover execution trigger based on predictive hysteresis.',
    keyTakeaway: 'Joint 3-fold action: Tier association, subcarrier slot, and continuous power allocation.'
  },
  {
    id: 5,
    category: 'PPO & RL',
    question: 'How is the reward function formulated mathematically?',
    answer: 'The reward $R_t$ is a multi-objective scalar: $R_t = w_1 \\cdot \\sum \\text{Throughput}_i + w_2 \\cdot \\text{SpectralEfficiency} - w_3 \\cdot \\text{Latency} - w_4 \\cdot \\text{PacketLossRate} - w_5 \\cdot \\text{PowerCost} - w_6 \\cdot \\text{HandoverPenalty}$. The handover penalty eliminates ping-pong switching, while QoS penalties prioritize URLLC traffic.',
    keyTakeaway: 'Weighted reward balancing capacity (+ throughput) against latency, loss, power, and ping-pong penalties.'
  },
  {
    id: 6,
    category: 'NTN Architecture',
    question: 'Why did you place LEO satellites at 550 km altitude?',
    answer: '550 km is the standardized orbital altitude for megaconstellations like Starlink Gen 1. It minimizes slant range round-trip propagation delay to approximately 3.6 ms to 10 ms (compared to ~250 ms for Geostationary Earth Orbit satellites at 35,786 km), which is mandatory to meet the strict ultra-reliable low latency (URLLC) targets of 6G.',
    keyTakeaway: 'Low one-way propagation delay (~3.6 ms) vs 250 ms for GEO satellites.'
  },
  {
    id: 7,
    category: 'NTN Architecture',
    question: 'What is the specific role of HAPS and UAVs in your architecture?',
    answer: 'While LEO satellites provide wide-area blanket coverage and terrestrial gNBs provide dense urban hotspots, HAPS (20 km altitude) and UAVs (stratospheric relays) act as intermediate mobile edge computing (MEC) nodes. They inject localized capacity into disaster relief zones and remote mountainous corridors where terrestrial masts are destroyed or physically infeasible.',
    keyTakeaway: 'Intermediate stratospheric relays injecting emergency capacity and edge computing.'
  },
  {
    id: 8,
    category: 'NTN Architecture',
    question: 'How did you handle Doppler shift caused by fast-moving satellites?',
    answer: 'At ~7.5 km/s velocity and Ka-band frequencies (28–30 GHz), Doppler shifts reach up to ±750 kHz. In our simulation, time-varying Doppler offsets are explicitly calculated via slant velocity projections $\\Delta f = \\frac{v_{rel}}{c} f_c$ and incorporated into the Channel State Information (CSI) observed by the PPO agent, allowing predictive frequency slot adjustment before co-channel interference occurs.',
    keyTakeaway: 'Slant velocity projections compute Doppler offsets up to ±750 kHz, feeding CSI directly.'
  },
  {
    id: 9,
    category: 'Simulation & Dataset',
    question: 'How was the synthetic dataset of ~12,000 samples generated?',
    answer: 'We simulated a 500 km × 500 km environment using 3GPP TR 38.811/38.821 NTN channel models over 2,000 episodes. User movement was generated with Random Waypoint mobility, and channel gains combined free-space path loss $L_{fs}$, 4 dB log-normal shadowing, and Rician small-scale fading with $K$-factors from 3 to 10 dB. Telemetry snapshots were extracted across 100 time-slots per episode.',
    keyTakeaway: 'Synthesized via 3GPP TR 38.811 path loss, log-normal shadowing, and Rician fading over 2,000 episodes.'
  },
  {
    id: 10,
    category: 'Results & Benchmarks',
    question: 'What baseline algorithms did you use for comparison?',
    answer: 'We benchmarked the proposed PPO model against: (1) Random Allocation, (2) Max-SINR greedy allocation (standard cellular heuristic connecting to the highest signal), (3) Genetic Algorithm (offline evolutionary optimization), (4) Deep Q-Network (DQN with discretized power levels), and (5) Multi-Agent DDPG (MADDPG). PPO proved superior in continuous stability and convergence speed.',
    keyTakeaway: 'Benchmarked against Max-SINR greedy, Genetic Algorithm, DQN, and MADDPG.'
  },
  {
    id: 11,
    category: 'Results & Benchmarks',
    question: 'Why does your AI model improve throughput by 14.82% over the baseline?',
    answer: 'The Max-SINR baseline greedily connects users to the highest instantaneous signal, causing spot-beam congestion and severe co-channel interference in dense clusters. The PPO agent performs joint spatial-frequency-power optimization: it offloads edge users to adjacent visible satellites or HAPS, dynamically cuts transmit power on interfering beams, and balances load, unlocking higher sum-rate capacity.',
    keyTakeaway: 'Joint spatial-frequency-power optimization eliminates spot-beam congestion and interference.'
  },
  {
    id: 12,
    category: 'Results & Benchmarks',
    question: 'How does the model reduce handover latency from 55 ms to 30 ms?',
    answer: 'Traditional handover is reactive: it triggers only after signal drops below an RSRP threshold (A3 event), causing disconnection, search delay, and ping-pong reassociations. The PPO agent tracks remaining dwell time and trajectory kinematics; it executes proactive handovers before the satellite descends below the elevation horizon, eliminating disconnection downtime.',
    keyTakeaway: 'Proactive trajectory-aware handover vs reactive threshold-drop reconnection.'
  }
];

