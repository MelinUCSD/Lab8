const formatVolumeIconPath = require('../assets/scripts/main');

describe('volumeIcon', () => {
  let volumeLevel3Path = './assets/media/icons/volume-level-3.svg';
  let volumeLevel2Path = './assets/media/icons/volume-level-2.svg';
  let volumeLevel1Path = './assets/media/icons/volume-level-1.svg';
  let volumeLevel0Path = './assets/media/icons/volume-level-0.svg';

  test('volume3', () => {
    expect(formatVolumeIconPath(67)).toBe(volumeLevel3Path);
  });

  test('volume2', () => {
    expect(formatVolumeIconPath(34)).toBe(volumeLevel2Path);
  });

  test('volume1', () => {
    expect(formatVolumeIconPath(33)).toBe(volumeLevel1Path);
  });

  test('volume0', () => {
    expect(formatVolumeIconPath(0)).toBe(volumeLevel0Path);
  });
});
