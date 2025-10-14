export function useDevice() {
  const isAppleMobileDevice = () => {
    return [/iPhone/i, /iPad/i, /iPod/i].some((item) =>
      navigator.userAgent.match(item),
    );
  };

  const isAppleDesktopDevice = () => {
    return [/Macintosh/i, /MacIntel/i, /MacPPC/i, /Mac68K/i].some((item) =>
      navigator.userAgent.match(item),
    );
  };

  const isApple = isAppleMobileDevice() || isAppleDesktopDevice();

  const isMobileFunc = () => {
    return (
      window.innerWidth <= 580 ||
      [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ].some((item) => navigator.userAgent.match(item))
    );
  };

  const isTabletFunc = () => {
    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      navigator.userAgent.toLowerCase(),
    );
  };

  const isSafari =
    /safari/i.test(navigator.userAgent) &&
    !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
      navigator.userAgent,
    );

  const isMobileOrTablet = isMobileFunc() || isTabletFunc();

  const isMobile = isMobileFunc();

  return {
    isApple,
    isMobileOrTablet,
    isSafari,
    isMobile,
  };
}
