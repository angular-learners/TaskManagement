import { EmailPrefixPipe } from './email-prefix.pipe';

describe('EmailPrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailPrefixPipe();
    expect(pipe).toBeTruthy();
  });
});
