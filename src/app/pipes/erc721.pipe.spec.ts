import { Erc721Pipe } from './erc721.pipe';

describe('Erc721Pipe', () => {
  it('create an instance', () => {
    const pipe = new Erc721Pipe();
    expect(pipe).toBeTruthy();
  });
});
