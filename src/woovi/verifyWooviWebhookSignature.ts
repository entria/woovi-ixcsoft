import { createVerify } from 'crypto';

import { config } from '../common/config.ts';
import logger from '../common/logger.ts';

type VerifyOptions = {
  rawBody: string;
  signatureBase64: string | undefined;
};

export const verifyWooviWebhookSignature = (options: VerifyOptions): boolean => {
  const { rawBody, signatureBase64 } = options;

  if (!signatureBase64) return false;
  if (!config.WOOVI_WEBHOOK_PUBLIC_KEY) {
    logger.error('WOOVI_WEBHOOK_PUBLIC_KEY is not configured');
    return false;
  }

  try {
    const verifier = createVerify('sha256');
    verifier.update(rawBody);
    verifier.end();
    return verifier.verify(
      config.WOOVI_WEBHOOK_PUBLIC_KEY,
      Buffer.from(signatureBase64, 'base64'),
    );
  } catch (err) {
    logger.error({ err }, 'woovi webhook signature verification failed');
    return false;
  }
};
