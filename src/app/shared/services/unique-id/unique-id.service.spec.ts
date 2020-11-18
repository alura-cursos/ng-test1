import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {
  it('#generateUniqueIdWithPrefix should generate ID when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
});
