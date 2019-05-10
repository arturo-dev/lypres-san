import { LeasingModule } from './leasing.module';

describe('LeasingModule', () => {
  let leasingModule: LeasingModule;

  beforeEach(() => {
    leasingModule = new LeasingModule();
  });

  it('should create an instance', () => {
    expect(leasingModule).toBeTruthy();
  });
});
