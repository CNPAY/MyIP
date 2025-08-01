function maskedInfo(t) {
  const fakecard = {};

    fakecard.ipv4 = "8.8.8.8",
    fakecard.ipv6 = "2001:4860:4860::8888",
    fakecard.dnsendpoints = "12.34.56.78",
    fakecard.webrtcip = "100.100.200.100",
    fakecard.country_name = "United States";
    fakecard.country_code = "US";
    fakecard.region = "California";
    fakecard.city = "Mountain View";
    fakecard.latitude = "37.40599";
    fakecard.longitude = "-122.078514";
    fakecard.isp = "Google LLC";
    fakecard.asn = "AS888888";
    fakecard.asnlink = "https://bgp.tools/as/AS15169",
    fakecard.mapUrl = '/res/defaultMap.webp';
    fakecard.mapUrl_dark = '/res/defaultMap_dark.webp';
    fakecard.showASNInfo = false;
    fakecard.isProxy = t('ipInfos.advancedData.proxyNo');
    fakecard.type = t('ipInfos.advancedData.type.Business');
    fakecard.isNativeIP = true;
    fakecard.qualityScore = 100;
    fakecard.proxyProtocol = t('ipInfos.advancedData.proxyUnknownProtocol');
    fakecard.proxyOperator = "unknown";

  return fakecard;
}

export { maskedInfo };