import axios from 'axios';
import { OgResultObject } from '@editor/lib/types';
import { getFavicon } from '@editor/lib/util';

export const getLinkPreviewData: (url: string) => Promise<OgResultObject> = async (url: string) => {
  const res = await axios.get(`/api/link-preview?url=${url}`);

  const data = res.data;
  if (!data || !data.success) return { success: false };

  const { requestUrl, favicon, ogTitle, ogImage, ogUrl, ogDescription } = res.data;
  return {
    url: res.data.requestUrl,
    favicon: favicon ? getFavicon(requestUrl, favicon) : '',
    title: ogTitle ?? '',
    imageUrl: ogImage && ogImage.length > 0 ? ogImage[0]?.url : undefined,
    description: ogDescription ?? '',
  };
};
