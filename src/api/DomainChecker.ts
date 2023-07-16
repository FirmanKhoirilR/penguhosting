const BASE_URL = " https://api.whoisfreaks.com/v1.0";

const fetchDomainChecker = async (url: string) => {
  const data = await fetch(`${BASE_URL}/${url}`);
  return data.json();
};

export const checkDomain = async (domain: string) => {
  const regex = /\.com$/i; // Match ".com" at the end (case-insensitive)
  const hasDotCom = regex.test(domain);

  const res = await fetchDomainChecker(`whois?whois=live&domainName=${hasDotCom ? domain : `${domain}.com`}&apiKey=${import.meta.env.VITE_APP_DOMAIN_CHECKER_API_KEY}`);
  return res;
};
