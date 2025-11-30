import { aracTools } from './arac';
import { digerTools } from './diger';
import { egitimTools } from './egitim';
import { krediTools } from './kredi';
import { maasTools } from './maas';
import { matematikTools } from './matematik';
import { saglikTools } from './saglik';
import { vergiTools } from './vergi';
import { yatirimTools } from './yatirim';
import { zamanTools } from './zaman';

export const allToolsData = [
  ...krediTools,
  ...yatirimTools,
  ...maasTools,
  ...vergiTools,
  ...saglikTools,
  ...matematikTools,
  ...egitimTools,
  ...zamanTools,
  ...aracTools,
  ...digerTools,
];
