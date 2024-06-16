/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 */

import cn from 'classnames';
import {ExternalLink} from './ExternalLink';

const bannerText = '비공식 사이트. 24.12.31. 폐쇄예정';
const bannerLink = 'https://ko.react.dev/';
const bannerLinkText = '공식사이트 바로가기';

export default function SocialBanner() {
  /* const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function patchedScrollTo(x: number, y: number) {
      if (y === 0) {
        // We're trying to reset scroll.
        // If we already scrolled past the banner, consider it as y = 0.
        const bannerHeight = ref.current?.offsetHeight ?? 0; // Could be zero (e.g. mobile)
        y = Math.min(window.scrollY, bannerHeight);
      }
      return realScrollTo(x, y);
    }
    const realScrollTo = window.scrollTo;
    (window as any).scrollTo = patchedScrollTo;
    return () => {
      (window as any).scrollTo = realScrollTo;
    };
  }, []); */

  return (
    <div
      // ref={ref}
      className={cn(
        `h-[40px] flex w-full bg-gray-100 dark:bg-gray-700 text-rose-700 text-lg py-2 sm:py-0 items-center justify-center flex-row`
      )}>
      <div className="block mr-1.5">{bannerText}</div>
      <ExternalLink
        className="ms-0 sm:ms-1 text-link dark:text-link-dark hover:underline"
        href={bannerLink}>
        {bannerLinkText}
      </ExternalLink>
    </div>
  );
}
