import { ARBITRUM, AVALANCHE } from "./chains";

export const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals",
    nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  },

  [AVALANCHE]: {
    // stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/polygon_state",
    stats: "https://api.thegraph.com/subgraphs/name/kwonlee9876/pomx2",
    // referrals: "https://api.thegraph.com/subgraphs/name/hspdev0814/polygon_referral",
    referrals: "https://api.thegraph.com/subgraphs/name/kwonlee9876/pomx3",
    // trades:"https://api.thegraph.com/subgraphs/name/hspdev0814/polygon_trade",
    trades:"https://api.thegraph.com/subgraphs/name/kwonlee9876/pomx",
  },

  common: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};
