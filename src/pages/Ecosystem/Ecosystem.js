import React from "react";
import { Trans } from "@lingui/macro";
import SEO from "components/Common/SEO";

import Footer from "components/Footer/Footer";
import { getPageTitle } from "lib/legacy";

import arbitrumIcon from "img/ic_arbitrum_16.svg";
import avalancheIcon from "img/ic_matic_16.svg";

import "./Ecosystem.css";
import ExternalLink from "components/ExternalLink/ExternalLink";
import { AVALANCHE } from "config/chains";
import { t } from "@lingui/macro";

const NETWORK_ICONS = {
  // [AVALANCHE]: arbitrumIcon,
  [AVALANCHE]: avalancheIcon,
};

const NETWORK_ICON_ALTS = {
  // [AVALANCHE]: "Arbitrum Icon",
  [AVALANCHE]: "Avalanche Icon",
};

export default function Ecosystem() {
  const gmxPages = [
    // {
    //   title: "POMX Governance",
    //   link: "https://gov.pmx.exchange/",
    //   linkLabel: "gov.pmx.exchange",
    //   about: t`POMX Governance Page`,
    //   chainIds: [AVALANCHE],
    // },
    {
      title: "POMX Stats",
      link: "https://stats.pmx.exchange/",
      linkLabel: "stats.pmx.exchange",
      about: t`POMX Stats Page`,
      chainIds: [AVALANCHE],
    },
    // {
    //   title: "POMX Proposals",
    //   link: "https://snapshot.org/#/minmax.eth",
    //   linkLabel: "snapshot.org",
    //   about: t`POMX Proposals Voting page`,
    //   chainIds: [AVALANCHE],
    // },
    {
      title: "POMX Announcements",
      link: "https://t.me/pomx",
      linkLabel: "t.me",
      about: t`POMX Announcements and Updates`,
      chainIds: [AVALANCHE],
    },
  ];

  const communityProjects = [
    // {
    //   title: "POMX Blueberry Club",
    //   link: "https://www.blueberry.club/",
    //   linkLabel: "blueberry.club",
    //   about: t`POMX Blueberry NFTs`,
    //   creatorLabel: "@xm92boi",
    //   creatorLink: "https://t.me/xm92boi",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Leaderboard",
    //   link: "https://www.minmax.house/",
    //   linkLabel: "minmax.house",
    //   about: t`Leaderboard for POMX traders`,
    //   creatorLabel: "@Itburnz",
    //   creatorLink: "https://t.me/Itburnz",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Positions Bot",
    //   link: "https://t.me/pomx",
    //   linkLabel: "t.me",
    //   about: t`Telegram bot for POMX position updates`,
    //   creatorLabel: "@zhongfu",
    //   creatorLink: "https://t.me/pomx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Blueberry Pulse",
    //   link: "https://blueberrypulse.substack.com/",
    //   linkLabel: "substack.com",
    //   about: t`POMX Weekly Updates`,
    //   creatorLabel: "@puroscohiba",
    //   creatorLink: "https://t.me/puroscohiba",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "DegenClip",
    //   link: "https://degenclip.com/",
    //   linkLabel: "degenclip.com",
    //   about: t`Community curated tweet collection`,
    //   creatorLabel: "@ox21l",
    //   creatorLink: "https://t.me/pomx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Yield Simulator",
    //   link: "https://mmx.defisims.com/",
    //   linkLabel: "defisims.com",
    //   about: t`Yield simulator for POMX`,
    //   creatorLabel: "@kyzoeth",
    //   creatorLink: "https://twitter.com/kyzoeth",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Returns Calculator",
    //   link: "https://docs.google.com/spreadsheets/u/4/d/1mQZlztz_NpTg5qQiYIzc_Ls1OTLfMOUtmEQN-WW8jj4/copy",
    //   linkLabel: "docs.google.com",
    //   about: t`Returns calculator for POMX and POLP`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Compound Calculator",
    //   link: "https://docs.google.com/spreadsheets/d/14DiIE1wZkK9-Y5xSx1PzIgmpcj4ccz1YVw5nwzIWLgI/edit#gid=0",
    //   linkLabel: "docs.google.com",
    //   about: t`Optimal compound interval calculator`,
    //   creatorLabel: "@ChasenKaminsky",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Trading Stats",
    //   link: "https://t.me/pomx",
    //   linkLabel: "t.me",
    //   about: t`Telegram bot for Open Interest on POMX`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Staking Bot",
    //   link: "https://t.me/pomx",
    //   linkLabel: "t.me",
    //   about: t`POMX staking rewards updates and insights`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "MMX Staking Calculator",
    //   link: "",
    //   linkLabel: "",
    //   about: t`POMX staking calculator`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://t.me/pomx",
    //   chainIds: [AVALANCHE],
    // },
  ];

  const dashboardProjects = [
    // {
    //   title: "POMX Referrals Dashboard",
    //   link: "",
    //   linkLabel: "",
    //   about: t`Dashboard for POMX referral stats`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Terminal",
    //   link: "",
    //   linkLabel: "",
    //   about: t`POMX explorer for stats and traders`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://t.me/pomx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Analytics",
    //   link: "",
    //   linkLabel: "",
    //   about: t`Financial reports and protocol analytics`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://t.me/pomx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "TokenTerminal",
    //   link: "",
    //   linkLabel: "",
    //   about: t`POMX fundamentals`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "CryptoFees",
    //   link: "",
    //   linkLabel: "",
    //   about: t`Fees generated by POMX`,
    //   creatorLabel: "@pmx",
    //   creatorLink: "https://twitter.com/pmx",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Shogun Dashboard (Dune Arbitrum)",
    //   link: "https://dune.com/shogun/gmx-analytics-arbitrum",
    //   linkLabel: "dune.com",
    //   about: t`Protocol analytics`,
    //   creatorLabel: "@JamesCliffyz",
    //   creatorLink: "https://twitter.com/JamesCliffyz",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Shogun Dashboard (Dune Avalanche)",
    //   link: "https://dune.com/shogun/gmx-analytics-avalanche",
    //   linkLabel: "dune.com",
    //   about: t`Protocol analytics`,
    //   creatorLabel: "@JamesCliffyz",
    //   creatorLink: "https://twitter.com/JamesCliffyz",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Perpetuals Data",
    //   link: "https://app.laevitas.ch/altsderivs/GMX/perpetualswaps",
    //   linkLabel: "laevitas.ch",
    //   about: t`POMX Perpetuals Data`,
    //   creatorLabel: "@laevitas1",
    //   creatorLink: "https://twitter.com/laevitas1",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "POMX Blueberry Leaderboard",
    //   link: "https://www.blueberryboard.com",
    //   linkLabel: "blueberryboard.com",
    //   about: t`GBC NFTs APR tracker and rewards`,
    //   creatorLabel: "@kyzoeth",
    //   creatorLink: "https://twitter.com/kyzoeth",
    //   chainIds: [AVALANCHE],
    // },
  ];

  const integrations = [
    // {
    //   title: "DeBank",
    //   link: "debank.com",
    //   linkLabe: "debank.com",
    //   about: t`DeFi Portfolio Tracker`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1439711532884152324",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Defi Llama",
    //   link: "https://defillama.com",
    //   linkLabel: "defillama.com",
    //   about: t`Decentralized Finance Dashboard`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1438124768033660938",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Dopex",
    //   link: "https://dopex.io",
    //   linkLabel: "dopex.io",
    //   about: t`Decentralized Options Protocol`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1482445801523716099",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Rook",
    //   link: "https://www.rook.fi/",
    //   linkLabel: "rook.fi",
    //   about: t`MEV Optimizer`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/Rook/status/1509613786600116251",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Jones DAO",
    //   link: "https://jonesdao.io",
    //   linkLabel: "jonesdao.io",
    //   about: t`Decentralized Options Strategies`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1482788805635678212",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Yield Yak Optimizer",
    //   link: "https://yieldyak.com/",
    //   linkLabel: "yieldyak.com",
    //   about: t`Yield Optimizer on Avalanche`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1484601407378378754",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Vovo Finance",
    //   link: "https://vovo.finance/",
    //   linkLabel: "vovo.finance",
    //   about: t`Structured Products`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/VovoFinance/status/1531517177790345217",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Stabilize Protocol",
    //   link: "https://www.stabilize.finance/",
    //   linkLabel: "stabilize.finance",
    //   about: t`Yield Vaults`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/StabilizePro/status/1532348674986082306",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "DODO",
    //   link: "https://dodoex.io/",
    //   linkLabel: "dodoex.io",
    //   about: t`Decentralized Trading Protocol`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1438899138549145605",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Open Ocean",
    //   link: "https://openocean.finance/",
    //   linkLabel: "openocean.finance",
    //   about: t`DEX Aggregator`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1495780826016989191",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Paraswap",
    //   link: "https://www.paraswap.io/",
    //   linkLabel: "paraswap.io",
    //   about: t`DEX Aggregator`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/paraswap/status/1546869879336222728",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "1inch",
    //   link: "https://1inch.io/",
    //   linkLabel: "1inch.io",
    //   about: t`DEX Aggregator`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/GMX_IO/status/1522247451410845696",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Firebird Finance",
    //   link: "https://app.firebird.finance/swap",
    //   linkLabel: "firebird.finance",
    //   about: t`DEX Aggregator`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/financefirebird/status/1561767094064238595",
    //   chainIds: [AVALANCHE],
    // },
    // {
    //   title: "Yield Yak Swap",
    //   link: "https://yieldyak.com/swap",
    //   linkLabel: "yieldyak.com",
    //   about: t`DEX Aggregator`,
    //   announcementLabel: "twitter.com",
    //   announcementLink: "https://twitter.com/yieldyak_/status/1484458884827947008",
    //   chainIds: [AVALANCHE],
    // },
  ];

  const telegramGroups = [
    {
      title: "POMX",
      link: "https://t.me/pomx",
      linkLabel: "t.me",
      about: t`Telegram Group`,
    },
    {
      title: "POMX (Chinese)",
      link: "https://t.me/pomx",
      linkLabel: "t.me",
      about: t`Telegram Group (Chinese)`,
    },
    {
      title: "POMX (Portuguese)",
      link: "https://t.me/pomx",
      linkLabel: "t.me",
      about: t`Telegram Group (Portuguese)`,
    },
    {
      title: "POMX Trading Chat",
      link: "https://t.me/pomx",
      linkLabel: "t.me",
      about: t`POMX community discussion`,
    },
  ];

  return (
    <SEO title={getPageTitle("Ecosystem Projects")}>
      <div className="default-container page-layout">
        <div>
          <div className="section-title-block">
            <div className="section-title-icon" />
            <div className="section-title-content">
              <div className="Page-title">
                <Trans>POMX Pages</Trans>
              </div>
              <div className="Page-description">
                <Trans>POMX ecosystem pages.</Trans>
              </div>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {gmxPages.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Community Projects</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects developed by the POMX community.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {communityProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider" />
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Dashboards</Trans>
            </div>
            <div className="Page-description">
              <Trans>POMX dashboards and analytics.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {dashboardProjects.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>

                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Creator</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.creatorLink}>{item.creatorLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Partnerships and Integrations</Trans>
            </div>
            <div className="Page-description">
              <Trans>Projects integrated with POMX.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {integrations.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div key={item.title} className="App-card">
                  <div className="App-card-title">
                    {item.title}
                    <div className="App-card-title-icon">
                      {item.chainIds.map((network) => (
                        <img key={network} src={NETWORK_ICONS[network]} alt={NETWORK_ICON_ALTS[network]} />
                      ))}
                    </div>
                  </div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Announcement</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.announcementLink}>{item.announcementLabel}</ExternalLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Tab-title-section">
            <div className="Page-title">
              <Trans>Telegram Groups</Trans>
            </div>
            <div className="Page-description">
              <Trans>Community-led Telegram groups.</Trans>
            </div>
          </div>
          <div className="DashboardV2-projects">
            {telegramGroups.map((item) => {
              const linkLabel = item.linkLabel ? item.linkLabel : item.link;
              return (
                <div className="App-card" key={item.title}>
                  <div className="App-card-title">{item.title}</div>
                  <div className="App-card-divider"></div>
                  <div className="App-card-content">
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>Link</Trans>
                      </div>
                      <div>
                        <ExternalLink href={item.link}>{linkLabel}</ExternalLink>
                      </div>
                    </div>
                    <div className="App-card-row">
                      <div className="label">
                        <Trans>About</Trans>
                      </div>
                      <div>{item.about}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
