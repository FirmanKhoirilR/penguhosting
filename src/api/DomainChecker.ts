const BASE_URL = " https://api.whoisfreaks.com/v1.0";

const fetchDomainChecker = async (url: string) => {
  const data = await fetch(`${BASE_URL}/${url}`);
  return data.json();
};

export const checkDomain = async (domain: string) => {
  const checkLowercase = domain.toLocaleLowerCase();
  const dot = /\.(com|de|club|design|io|org|info|biz|net)$/i;
  const hasDotCom = dot.test(checkLowercase);

  const res = await fetchDomainChecker(`whois?whois=live&domainName=${hasDotCom ? checkLowercase : `${checkLowercase}.com`}&apiKey=${import.meta.env.VITE_APP_DOMAIN_CHECKER_API_KEY}`);
  return res;
};
