import { expect, it } from 'vitest';

import { extractHtmlMessage } from '../ixcsoftClient.ts';

it('strips IXC error <div> wrapper and returns the user-facing message', () => {
  const html =
    '<div style="margin:40px; padding:30px; background:#FF0000; border:1px solid #000; color:#FFF; font-weight:bold; font-family:Arial, Helvetica, sans-serif; font-size:12px; text-align:center">Ocorreu um erro ao processar. Contate o suporte IXC Soft.</div>';
  expect(extractHtmlMessage(html)).toBe(
    'Ocorreu um erro ao processar. Contate o suporte IXC Soft.',
  );
});

it('collapses whitespace across nested tags', () => {
  const html = '<div>\n  <span>foo</span>\n  <b>bar</b>\n</div>';
  expect(extractHtmlMessage(html)).toBe('foo bar');
});

it('returns empty string when the input has no text content', () => {
  expect(extractHtmlMessage('<br/><hr/>')).toBe('');
});

it('passes through plain text unchanged (no tags)', () => {
  expect(extractHtmlMessage('plain message')).toBe('plain message');
});
