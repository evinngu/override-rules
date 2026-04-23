import type { CountryMeta } from "./types";

export const NODE_SUFFIX = "节点";
export const CDN_URL = "https://cdn.jsdelivr.net";

export const PROXY_GROUPS = {
    SELECT: "选择代理",
    MANUAL: "手动选择",
    AUTO: "自动选择",
    FALLBACK: "故障转移",
    DIRECT: "直连",
    LANDING: "落地节点",
    LOW_COST: "低倍率节点",
    FRONT_PROXY: "前置代理",
    STATIC_RESOURCES: "静态资源",
    AI_SERVICE: "AI服务",
    CRYPTO: "加密货币",
    APPLE: "苹果服务",
    GOOGLE: "谷歌服务",
    MICROSOFT: "微软服务",
    BILIBILI: "哔哩哔哩",
    BAHAMUT: "巴哈姆特",
    YOUTUBE: "YouTube",
    NETFLIX: "Netflix",
    TIKTOK: "TikTok",
    SPOTIFY: "Spotify",
    EHENTAI: "E-Hentai",
    TELEGRAM: "Telegram",
    TRUTH_SOCIAL: "真相社交",
    PIKPAK: "PikPak网盘",
    SSH: "SSH(22端口)",
    SOGOU_INPUT: "搜狗输入法",
    AD_BLOCK: "广告拦截",
    GLOBAL: "GLOBAL",
} as const;

/**
 * 各地区的元数据：`weight` 决定在代理组列表中的排列顺序（值越小越靠前，未设置则排末尾）；
 * `pattern` 是用于匹配节点名称的正则字符串；`icon` 为策略组图标 URL。
 */
export const countriesMeta: Record<string, CountryMeta> = {
    香港: {
        weight: 10,
        pattern: "香港|港|HK|hk|Hong Kong|HongKong|hongkong|🇭🇰",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png`,
    },
    澳门: {
        pattern: "澳门|MO|Macau|🇲🇴",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Macao.png`,
    },
    台湾: {
        weight: 20,
        pattern: "台|新北|彰化|TW|Taiwan|🇹🇼",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png`,
    },
    新加坡: {
        weight: 30,
        pattern: "新加坡|坡|狮城|SG|Singapore|🇸🇬",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Singapore.png`,
    },
    日本: {
        weight: 40,
        pattern: "日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|🇯🇵",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Japan.png`,
    },
    韩国: {
        pattern: "KR|Korea|KOR|首尔|韩|韓|🇰🇷",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Korea.png`,
    },
    美国: {
        weight: 50,
        pattern: "美国|美|US|United States|🇺🇸",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/United_States.png`,
    },
    加拿大: {
        pattern: "加拿大|Canada|CA|🇨🇦",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Canada.png`,
    },
    英国: {
        weight: 60,
        pattern: "英国|United Kingdom|UK|伦敦|London|🇬🇧",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png`,
    },
    澳大利亚: {
        pattern: "澳洲|澳大利亚|AU|Australia|🇦🇺",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Australia.png`,
    },
    德国: {
        weight: 70,
        pattern: "德国|德|DE|Germany|🇩🇪",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Germany.png`,
    },
    法国: {
        weight: 80,
        pattern: "法国|法|FR|France|🇫🇷",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/France.png`,
    },
    俄罗斯: {
        pattern: "俄罗斯|俄|RU|Russia|🇷🇺",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Russia.png`,
    },
    泰国: {
        pattern: "泰国|泰|TH|Thailand|🇹🇭",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Thailand.png`,
    },
    印度: {
        pattern: "印度|IN|India|🇮🇳",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/India.png`,
    },
    马来西亚: {
        pattern: "马来西亚|马来|MY|Malaysia|🇲🇾",
        icon: `${CDN_URL}/gh/Koolson/Qure@master/IconSet/Color/Malaysia.png`,
    },
};
