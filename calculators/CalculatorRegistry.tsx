

import React, { useState, useEffect } from 'react';
import { 
  calculateLoan, calculateVAT, calculatePercentage, calculateBMI, 
  calculateIdealWeight, calculateDateDiff, calculatePhysics, calculateUnit, 
  calculateBill, calculateSalaryLogic, calculateCurrency, calculateHealthDate, 
  calculateEducation, calculateVehicleTax, calculateGeometry, calculateGeneralTax,
  validateIBAN, calculateTireDiff, calculateHealthLifestyle,
  calculateInterest, calculateTimeLogic, calculateRentLogic, calculateInsuranceLogic, calculateSocialBenefit,
  calculateFinderLogic
} from '../utils/calculatorLogic';

interface Props {
  slug: string;
}

export const CalculatorRegistry: React.FC<Props> = ({ slug }) => {
  // Existing Categories
  const isVAT = slug.includes('kdv');
  const isBMI = slug.includes('bmi') || slug.includes('vucut') || slug.includes('cocuk') || slug.includes('percentil');
  const isWeight = slug.includes('ideal-kilo');
  const isDate = slug.includes('yas') || slug.includes('gun') || slug.includes('tarih') || slug.includes('sure') || slug.includes('hafta') || slug.includes('takvim') || slug.includes('emeklilik') || slug.includes('eyt');
  
  const isPhysics = slug.includes('hiz') || slug.includes('ivme') || slug.includes('kuvvet') || slug.includes('momentum') || slug.includes('enerji') || slug.includes('yogunluk') || slug.includes('gucu') || slug.includes('powerbank');
  const isUnit = slug.includes('cevirici') || slug.includes('km-') || slug.includes('mb-gb') || slug.includes('sicaklik') || slug.includes('dakika');
  const isBill = slug.includes('fatura') || slug.includes('tuketim') || slug.includes('yakit') || slug.includes('sarj') || slug.includes('kota') || slug.includes('yemek') || slug.includes('yol') || slug.includes('para-ustu');

  // New Categories
  const isSalary = slug.includes('maas') || slug.includes('ucret') || slug.includes('tazminat') || slug.includes('issizlik') || slug.includes('agi') || slug.includes('arabuluculuk');
  const isCurrency = slug.includes('doviz') || slug.includes('altin') || slug.includes('bilezik') || slug.includes('kur');
  
  // Exclude 'parasi' (Benefit) from HealthDate
  const isHealthDate = (slug.includes('gebelik') || slug.includes('adet') || slug.includes('dogum') || slug.includes('hamilelik') || slug.includes('yumurtlama')) && !slug.includes('parasi');
  
  const isEducation = slug.includes('not') || slug.includes('puan') || slug.includes('net') || slug.includes('ehliyet') || slug.includes('sinav');
  const isVehicleTax = slug.includes('mtv') || slug.includes('otv') || slug.includes('trafik-cezasi') || slug.includes('ceza') || slug.includes('muayene') || slug.includes('hgs') || slug.includes('noter') || slug.includes('deger');
  
  const isGeometry = slug.includes('metrekare') || slug.includes('alan') || slug.includes('hacim') || slug.includes('desi') || slug.includes('brut');
  const isGeneralTax = slug.includes('gelir-vergisi') || slug.includes('damga') || slug.includes('tapu') || slug.includes('emlak') || slug.includes('pasaport') || slug.includes('vergi-borcu') || slug.includes('gumruk') || slug.includes('harc') || slug.includes('stopaj') || slug.includes('vize') || slug.includes('sirket');

  const isIBAN = slug.includes('iban');
  const isTire = slug.includes('lastik');
  
  const isHealthLifestyle = slug.includes('kalori') || slug.includes('su') || slug.includes('bel-kalca');

  // Newly Added Categories
  const isInterest = slug.includes('faiz-hesaplama') || slug.includes('kmh') || slug.includes('mevduat') || slug.includes('bes');
  const isTime = slug.includes('is-gunu') || slug.includes('saat-farki') || slug.includes('mesai') || slug.includes('calisma-suresi') || slug.includes('uyku') || slug.includes('izin');
  const isRent = slug.includes('kira-artis') || slug.includes('kira-getirisi') || slug.includes('kira-zam');
  const isInsurance = slug.includes('dask') || slug.includes('kasko') || slug.includes('trafik-sigortasi') || slug.includes('konut-sigortasi') || slug.includes('sgk');
  const isBenefit = slug.includes('dogum-parasi') || slug.includes('evde-bakim') || slug.includes('cep-harcligi');
  const isFinder = slug.includes('swift') || slug.includes('sube') || slug.includes('posta');

  const isPercent = slug.includes('yuzde') || slug.includes('zam') || slug.includes('indirim') || slug.includes('kar') || slug.includes('komisyon') || slug.includes('asgari') || slug.includes('enflasyon') || slug.includes('amortisman');
  const isLoan = (slug.includes('kredi') || slug.includes('mortgage') || slug.includes('avans') || slug.includes('taksit')) && !slug.includes('asgari');

  if (isIBAN) return <IBANCalculator />;
  if (isTire) return <TireCalculator />;
  if (isHealthLifestyle) return <HealthLifestyleCalculator slug={slug} />;
  
  if (isLoan) return <LoanCalculator />;
  if (isVAT) return <VATCalculator />;
  if (isPercent) return <PercentCalculator slug={slug} />;
  if (isBMI) return <BMICalculator />;
  if (isWeight) return <IdealWeightCalculator />;
  if (isDate) return <DateCalculator slug={slug} />;
  if (isPhysics) return <PhysicsCalculator slug={slug} />;
  if (isUnit) return <UnitCalculator slug={slug} />;
  if (isBill) return <BillCalculator slug={slug} />;
  
  if (isSalary) return <SalaryCalculator slug={slug} />;
  if (isCurrency) return <CurrencyCalculator slug={slug} />;
  if (isHealthDate) return <HealthDateCalculator slug={slug} />;
  if (isEducation) return <EducationCalculator slug={slug} />;
  if (isVehicleTax) return <VehicleTaxCalculator slug={slug} />;
  if (isGeometry) return <GeometryCalculator slug={slug} />;
  if (isGeneralTax) return <GeneralTaxCalculator slug={slug} />;

  if (isInterest) return <InterestCalculator slug={slug} />;
  if (isTime) return <TimeCalculator slug={slug} />;
  if (isRent) return <RentCalculator slug={slug} />;
  if (isInsurance) return <InsuranceCalculator slug={slug} />;
  if (isBenefit) return <SocialBenefitCalculator slug={slug} />;
  if (isFinder) return <FinderCalculator slug={slug} />;

  return <GenericCalculator />;
};

// --- UI Components ---

const ResultBox: React.FC<{ label: string; value: string | number; highlight?: boolean; subtext?: string }> = ({ label, value, highlight, subtext }) => (
  <div className={`relative p-5 rounded-xl transition-all duration-300 ${
    highlight 
      ? 'bg-brand-dark text-brand-surface shadow-lg transform hover:-translate-y-0.5' 
      : 'bg-white text-brand-dark border border-brand-beige/40 shadow-sm'
  }`}>
    <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 ${highlight ? 'opacity-70' : 'text-brand-grey/60'}`}>
      {label}
    </div>
    <div className={`font-heading font-bold tracking-tight leading-none my-2 ${String(value).length > 10 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
      {value}
    </div>
    {subtext && (
      <div className={`text-xs mt-1 leading-tight ${highlight ? 'opacity-70' : 'text-brand-grey'}`}>
        {subtext}
      </div>
    )}
  </div>
);

const ErrorBox: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm mb-6 animate-fade-in flex items-center gap-3 shadow-sm" role="alert">
    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-600">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="19.01"></line><line x1="12" y1="15" x2="12" y2="5"></line></svg>
    </div>
    <span className="font-medium">{message}</span>
  </div>
);

const InputGroup: React.FC<{ label: string; children: React.ReactNode; help?: string }> = ({ label, children, help }) => (
  <div className="mb-5 relative group">
    <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-grey/70 mb-1.5 ml-1 group-focus-within:text-brand-dark transition-colors">
      {label}
    </label>
    {children}
    {help && <p className="text-xs text-brand-grey/50 mt-1 ml-1">{help}</p>}
  </div>
);

const StyledInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="relative">
    <input 
      {...props}
      className="w-full p-3.5 rounded-xl bg-brand-light/30 border border-transparent focus:bg-white focus:border-brand-beige focus:ring-4 focus:ring-brand-dark/5 outline-none transition-all duration-200 text-brand-dark font-medium placeholder:text-brand-grey/30 text-base shadow-sm hover:bg-brand-light/50"
    />
  </div>
);

const StyledSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <div className="relative">
    <select 
      {...props}
      className="w-full p-3.5 pr-10 rounded-xl bg-brand-light/30 border border-transparent focus:bg-white focus:border-brand-beige focus:ring-4 focus:ring-brand-dark/5 outline-none transition-all duration-200 text-brand-dark font-medium appearance-none text-base cursor-pointer hover:bg-brand-light/50"
    >
      {props.children}
    </select>
    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/50">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
  </div>
);

// --- Calculators ---

const LoanCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(12);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (!amount || !rate || !months) { setResult(null); return; }
    if (amount <= 0 || rate < 0 || months <= 0 || !Number.isInteger(months)) {
       setError("Lütfen geçerli pozitif değerler giriniz.");
       setResult(null);
       return;
    }
    const res = calculateLoan(amount, rate, months);
    setResult(res);
  }, [amount, rate, months]);

  return (
    <div>
      {error && <ErrorBox message={error} />}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <InputGroup label="Tutar (TL)">
          <StyledInput type="number" min="0" value={amount || ''} onChange={e => setAmount(Number(e.target.value))} />
        </InputGroup>
        <InputGroup label="Aylık Faiz Oranı (%)">
          <StyledInput type="number" step="0.01" min="0" value={rate || ''} onChange={e => setRate(Number(e.target.value))} />
        </InputGroup>
        <InputGroup label="Vade Süresi (Ay)">
          <StyledInput type="number" min="1" step="1" value={months || ''} onChange={e => setMonths(Number(e.target.value))} />
        </InputGroup>
      </div>
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-slide-up">
          <ResultBox label="Aylık Taksit" value={`${result.monthly.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />
          <ResultBox label="Toplam Geri Ödeme" value={`${result.total.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} />
          <ResultBox label="Toplam Faiz" value={`${result.interest.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} />
        </div>
      )}
    </div>
  );
};

const VATCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState<'include' | 'exclude'>('include');
  const [res, setRes] = useState<any>(null);

  useEffect(() => {
    if (amount >= 0 && rate >= 0) setRes(calculateVAT(amount, rate, mode));
    else setRes(null);
  }, [amount, rate, mode]);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <InputGroup label="Tutar (TL)">
          <StyledInput type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        </InputGroup>
        <InputGroup label="KDV Oranı (%)">
           <StyledInput type="number" value={rate} onChange={e => setRate(Number(e.target.value))} />
        </InputGroup>
        <InputGroup label="Hesaplama Yönü">
           <StyledSelect value={mode} onChange={e => setMode(e.target.value as any)}>
            <option value="include">KDV Ekle</option>
            <option value="exclude">KDV Çıkar</option>
          </StyledSelect>
        </InputGroup>
      </div>
      {res && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-slide-up">
           <ResultBox label="Matrah" value={`${res.base.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} />
           <ResultBox label="KDV" value={`${res.vatAmount.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} />
           <ResultBox label="Toplam" value={`${res.total.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />
        </div>
      )}
    </div>
  );
};

const PercentCalculator: React.FC<{slug: string}> = ({ slug }) => {
  let defaultMode = 'percentOf';
  if(slug.includes('zam') || slug.includes('enflasyon')) defaultMode = 'increase';
  if(slug.includes('indirim') || slug.includes('amortisman')) defaultMode = 'decrease';
  
  const [val1, setVal1] = useState(100);
  const [val2, setVal2] = useState(10);
  const [mode, setMode] = useState(defaultMode);
  const [res, setRes] = useState<number | null>(null);

  useEffect(() => {
     if(val1 !== undefined && val2 !== undefined) setRes(calculatePercentage(val1, val2, mode as any));
  }, [val1, val2, mode]);

  return (
    <div>
       <div className="grid md:grid-cols-3 gap-5 mb-8">
         <InputGroup label={mode === 'diff' ? 'İlk Değer' : 'Tutar / Sayı'}>
           <StyledInput type="number" value={val1} onChange={e => setVal1(Number(e.target.value))} />
         </InputGroup>
         <InputGroup label={mode === 'diff' ? 'İkinci Değer' : 'Yüzde Oranı (%)'}>
           <StyledInput type="number" value={val2} onChange={e => setVal2(Number(e.target.value))} />
         </InputGroup>
         <InputGroup label="İşlem">
           <StyledSelect value={mode} onChange={e => setMode(e.target.value)}>
             <option value="percentOf">% kaçıdır?</option>
             <option value="increase">Artır</option>
             <option value="decrease">Azalt</option>
             <option value="diff">Değişim %</option>
           </StyledSelect>
         </InputGroup>
       </div>
       {res !== null && (
        <div className="animate-slide-up">
            <ResultBox label="Sonuç" value={mode === 'diff' ? `%${res.toFixed(2)}` : res.toFixed(2)} highlight />
        </div>
       )}
    </div>
  );
};

const BMICalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [res, setRes] = useState<any>(null);

  useEffect(() => {
    if (weight > 0 && height > 0) setRes(calculateBMI(weight, height));
  }, [weight, height]);

  return (
    <div>
       <div className="grid md:grid-cols-2 gap-5 mb-8">
         <InputGroup label="Kilo (kg)">
           <StyledInput type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} />
         </InputGroup>
         <InputGroup label="Boy (cm)">
           <StyledInput type="number" value={height} onChange={e => setHeight(Number(e.target.value))} />
         </InputGroup>
       </div>
       {res && (
         <div className="grid grid-cols-2 gap-5 animate-slide-up">
            <ResultBox label="BMI" value={res.bmi.toFixed(2)} />
            <ResultBox label="Durum" value={res.status} highlight />
         </div>
       )}
    </div>
  );
};

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState(170);
  const [gender, setGender] = useState<'male'|'female'>('female');
  const [weight, setWeight] = useState<number | null>(null);

  useEffect(() => {
     if(height > 0) setWeight(calculateIdealWeight(height, gender));
  }, [height, gender]);
  
  return (
    <div>
       <div className="grid md:grid-cols-2 gap-5 mb-8">
         <InputGroup label="Boy (cm)">
           <StyledInput type="number" value={height} onChange={e => setHeight(Number(e.target.value))} />
         </InputGroup>
         <InputGroup label="Cinsiyet">
           <StyledSelect value={gender} onChange={e => setGender(e.target.value as any)}>
             <option value="female">Kadın</option>
             <option value="male">Erkek</option>
           </StyledSelect>
         </InputGroup>
       </div>
       {weight && (
         <div className="animate-slide-up">
            <ResultBox label="İdeal Kilo" value={`${weight.toFixed(1)} kg`} highlight />
         </div>
       )}
    </div>
  );
};

const DateCalculator: React.FC<{slug: string}> = ({slug}) => {
  const [d1, setD1] = useState(new Date().toISOString().split('T')[0]);
  const [d2, setD2] = useState('2000-01-01');
  const [res, setRes] = useState<any>(null);
  const isBirth = slug.includes('yas');
  const isRetire = slug.includes('emeklilik') || slug.includes('eyt');

  let l1 = "Başlangıç", l2 = "Bitiş";
  if(isBirth) { l1 = ""; l2 = "Doğum Tarihi"; }
  if(isRetire) { l1 = "İşe Giriş Tarihi"; l2 = "Doğum Tarihi"; }

  useEffect(() => {
    if(d1 && d2) {
        if(isBirth) setRes(calculateDateDiff(d2, new Date().toISOString().split('T')[0]));
        else setRes(calculateDateDiff(d1, d2));
    }
  }, [d1, d2, isBirth]);

  return (
    <div>
       <div className="grid md:grid-cols-2 gap-5 mb-8">
         {!isBirth && <InputGroup label={l1}><StyledInput type="date" value={d1} onChange={e => setD1(e.target.value)} /></InputGroup>}
         <InputGroup label={l2}><StyledInput type="date" value={d2} onChange={e => setD2(e.target.value)} /></InputGroup>
       </div>
       {res && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-slide-up">
            <ResultBox label={isRetire ? "Geçen Süre (Hizmet)" : "Toplam Gün"} value={res.totalDays} />
            <ResultBox label="Süre" value={`${res.years} Yıl ${res.months} Ay ${res.days} Gün`} highlight />
         </div>
       )}
    </div>
  );
};

const PhysicsCalculator: React.FC<{slug: string}> = ({slug}) => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [res, setRes] = useState<number|null>(null);
  
  let l1 = "Değer 1", l2 = "Değer 2", unit = "";
  if(slug.includes('hiz')) { l1="Mesafe (m)"; l2="Zaman (s)"; unit="m/s"; }
  else if(slug.includes('ivme')) { l1="Hız Farkı (m/s)"; l2="Zaman (s)"; unit="m/s²"; }
  else if(slug.includes('kuvvet')) { l1="Kütle (kg)"; l2="İvme (m/s²)"; unit="N"; }
  else if(slug.includes('momentum')) { l1="Kütle (kg)"; l2="Hız (m/s)"; unit="kg·m/s"; }
  else if(slug.includes('enerji')) { l1="Kütle (kg)"; l2="Hız (m/s)"; unit="J"; }
  else if(slug.includes('yogunluk')) { l1="Kütle (kg)"; l2="Hacim (m³)"; unit="kg/m³"; }
  else if(slug.includes('gucu')) { l1="İş (J)"; l2="Zaman (s)"; unit="W"; }
  else if(slug.includes('powerbank')) { l1="Powerbank (mAh)"; l2="Cihaz (mAh)"; unit="Kez"; }

  useEffect(() => { setRes(calculatePhysics(val1, val2, slug)); }, [val1, val2, slug]);

  return (
    <div>
       <div className="grid md:grid-cols-2 gap-5 mb-8">
          <InputGroup label={l1}><StyledInput type="number" value={val1} onChange={e => setVal1(Number(e.target.value))} /></InputGroup>
          <InputGroup label={l2}><StyledInput type="number" value={val2} onChange={e => setVal2(Number(e.target.value))} /></InputGroup>
       </div>
       {res !== null && <ResultBox label="Sonuç" value={`${res.toFixed(2)} ${unit}`} highlight />}
    </div>
  );
};

const UnitCalculator: React.FC<{slug: string}> = ({slug}) => {
  const [val, setVal] = useState(1);
  const [direction, setDirection] = useState<'forward'|'backward'>('forward');
  const [res, setRes] = useState<number|null>(null);
  
  let labelFrom = "Giriş", labelTo = "Çıkış";
  if (slug.includes('sicaklik')) { labelFrom = "°C"; labelTo = "°F"; }
  else if (slug.includes('km-mil')) { labelFrom = "km"; labelTo = "mil"; }
  else if (slug.includes('mb-gb')) { labelFrom = "MB"; labelTo = "GB"; }
  else if (slug.includes('dakika')) { labelFrom = "Dakika"; labelTo = "Saat/Sn"; }
  else if (slug.includes('km-metre')) { labelFrom = "km"; labelTo = "m"; }

  if(direction === 'backward') { const temp = labelFrom; labelFrom = labelTo; labelTo = temp; }

  useEffect(() => { setRes(calculateUnit(val, slug, direction)); }, [val, direction, slug]);

  return (
    <div>
       <div className="grid md:grid-cols-2 gap-5 mb-8">
          <InputGroup label={labelFrom}><StyledInput type="number" value={val} onChange={e => setVal(Number(e.target.value))} /></InputGroup>
          <InputGroup label="Yön"><StyledSelect value={direction} onChange={e => setDirection(e.target.value as any)}><option value="forward">Düz</option><option value="backward">Ters</option></StyledSelect></InputGroup>
       </div>
       {res !== null && <ResultBox label={labelTo} value={res.toFixed(2)} highlight />}
    </div>
  );
};

const BillCalculator: React.FC<{slug: string}> = ({slug}) => {
  const [amount, setAmount] = useState(100);
  const [price, setPrice] = useState(1.5);
  const [res, setRes] = useState<number|null>(null);
  
  let l1 = "Tüketim", l2 = "Birim Fiyat";
  let suffix = "TL";
  
  if (slug.includes('kota')) { l1 = "Video İzleme (Saat)"; l2 = "GB / Saat"; suffix = "GB"; }
  if (slug.includes('yakit')) { l1 = "Yol (km)"; l2 = "Tüketim (TL/km)"; }
  if (slug.includes('yemek') || slug.includes('yol')) { l1 = "Gün Sayısı"; l2 = "Günlük Ücret (TL)"; }

  useEffect(() => { setRes(calculateBill(amount, price)); }, [amount, price]);

  return (
     <div>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
           <InputGroup label={l1}><StyledInput type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} /></InputGroup>
           <InputGroup label={l2}><StyledInput type="number" value={price} onChange={e => setPrice(Number(e.target.value))} /></InputGroup>
        </div>
        {res !== null && <ResultBox label="Toplam" value={`${res.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} ${suffix}`} highlight />}
     </div>
  );
};

// --- NEW COMPONENTS ---

const SalaryCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [gross, setGross] = useState(20002);
    const [years, setYears] = useState(1);
    const [res, setRes] = useState<number|null>(null);

    useEffect(() => { setRes(calculateSalaryLogic(gross, years, slug)); }, [gross, years, slug]);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
                <InputGroup label="Brüt Maaş (TL)">
                    <StyledInput type="number" value={gross} onChange={e => setGross(Number(e.target.value))} />
                </InputGroup>
                {(slug.includes('kidem') || slug.includes('ihbar')) && (
                    <InputGroup label="Çalışma Süresi (Yıl)">
                        <StyledInput type="number" value={years} step="0.5" onChange={e => setYears(Number(e.target.value))} />
                    </InputGroup>
                )}
            </div>
            {res !== null && <ResultBox label="Tahmini Tutar" value={`${res.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />}
        </div>
    );
};

const CurrencyCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [amount, setAmount] = useState(1);
    const [res, setRes] = useState<number|null>(null);
    let label = "Tutar / Adet";
    if(slug.includes('altin') || slug.includes('bilezik')) label = "Adet / Gram";

    useEffect(() => { setRes(calculateCurrency(amount, slug)); }, [amount, slug]);

    return (
        <div>
            <div className="mb-8">
                <InputGroup label={label}>
                    <StyledInput type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                </InputGroup>
            </div>
            {res !== null && <ResultBox label="TL Karşılığı" value={`${res.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />}
            <div className="text-xs text-brand-grey/50 mt-2 text-center">* Kurlar demo amaçlıdır. Yatırım tavsiyesi değildir.</div>
        </div>
    );
};

const HealthDateCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [res, setRes] = useState<{date: string, extra: string}|null>(null);
    
    let label = "Tarih Seçin";
    if(slug.includes('gebelik')) label = "Son Adet Tarihi (SAT)";
    if(slug.includes('adet')) label = "Son Adet Başlangıcı";

    useEffect(() => { setRes(calculateHealthDate(date, slug)); }, [date, slug]);

    return (
        <div>
            <div className="mb-8">
                <InputGroup label={label}>
                    <StyledInput type="date" value={date} onChange={e => setDate(e.target.value)} />
                </InputGroup>
            </div>
            {res && (
                <div className="grid md:grid-cols-2 gap-5 animate-slide-up">
                    <ResultBox label="Hedef Tarih" value={res.date} highlight />
                    <ResultBox label="Bilgi" value={res.extra} />
                </div>
            )}
        </div>
    );
};

const EducationCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [val1, setVal1] = useState(30); 
    const [val2, setVal2] = useState(5); 
    const [res, setRes] = useState<number|null>(null);

    let l1 = "1. Sınav Notu", l2 = "2. Sınav Notu", rLabel = "Ortalama";
    const isDriver = slug.includes('ehliyet') || slug.includes('sinav');
    
    if(slug.includes('net')) { l1 = "Doğru Sayısı"; l2 = "Yanlış Sayısı"; rLabel = "Net Sayısı"; }
    else if(isDriver) { l1 = "Doğru Sayısı (50 Soru)"; l2 = ""; rLabel = "Puan (100 üzerinden)"; }

    useEffect(() => { setRes(calculateEducation(val1, val2, slug)); }, [val1, val2, slug]);

    return (
        <div>
            <div className={`grid ${isDriver ? 'grid-cols-1' : 'md:grid-cols-2'} gap-5 mb-8`}>
                <InputGroup label={l1}><StyledInput type="number" value={val1} onChange={e => setVal1(Number(e.target.value))} /></InputGroup>
                {!isDriver && <InputGroup label={l2}><StyledInput type="number" value={val2} onChange={e => setVal2(Number(e.target.value))} /></InputGroup>}
            </div>
            {res !== null && <ResultBox label={rLabel} value={res.toFixed(2)} highlight />}
        </div>
    );
};

const VehicleTaxCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [val, setVal] = useState(1600); // CC or Price
    const [res, setRes] = useState<number|null>(null);

    let label = "Değer";
    if(slug.includes('mtv')) label = "Motor Hacmi (cc)";
    if(slug.includes('otv') || slug.includes('noter') || slug.includes('deger')) label = "Araç Fiyatı / Bedel (TL)";
    if(slug.includes('ceza') || slug.includes('trafik')) label = "Ceza Tutarı (TL)";

    useEffect(() => { setRes(calculateVehicleTax(val, slug)); }, [val, slug]);

    let resLabel = "Tahmini Tutar";
    if(slug.includes('ceza') || slug.includes('trafik')) resLabel = "İndirimli Tutar";

    return (
        <div>
            <div className="mb-8">
                 <InputGroup label={label}>
                    <StyledInput type="number" value={val} onChange={e => setVal(Number(e.target.value))} />
                 </InputGroup>
            </div>
            {res !== null && <ResultBox label={resLabel} value={`${res.toLocaleString('tr-TR')} TL`} highlight />}
        </div>
    );
};

const GeometryCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [v1, setV1] = useState(10);
    const [v2, setV2] = useState(10);
    const [v3, setV3] = useState(10);
    const [res, setRes] = useState<number|null>(null);
    
    const needs3 = slug.includes('hacim') || slug.includes('desi');
    let l1 = "En / Genişlik", l2 = "Boy / Uzunluk", l3 = "Yükseklik", suffix = "Birim";
    
    if (slug.includes('metrekare') || slug.includes('alan')) { suffix = "m²"; }
    else if (slug.includes('hacim')) { suffix = "m³"; }
    else if (slug.includes('desi')) { suffix = "Desi"; }
    else if (slug.includes('brut')) { l1 = "Net Alan (m²)"; l2 = "Ortak Alan Oranı (%)"; suffix = "Brüt m²"; }

    useEffect(() => { setRes(calculateGeometry(v1, v2, v3, slug)); }, [v1, v2, v3, slug]);

    return (
        <div>
             <div className="grid md:grid-cols-3 gap-5 mb-8">
                <InputGroup label={l1}><StyledInput type="number" value={v1} onChange={e => setV1(Number(e.target.value))} /></InputGroup>
                <InputGroup label={l2}><StyledInput type="number" value={v2} onChange={e => setV2(Number(e.target.value))} /></InputGroup>
                {needs3 && <InputGroup label={l3}><StyledInput type="number" value={v3} onChange={e => setV3(Number(e.target.value))} /></InputGroup>}
             </div>
             {res !== null && <ResultBox label="Sonuç" value={`${res.toFixed(2)} ${suffix}`} highlight />}
        </div>
    );
};

const GeneralTaxCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [amount, setAmount] = useState(10000);
    const [res, setRes] = useState<number|null>(null);
    
    let label = "Tutar / Matrah";
    if (slug.includes('gelir')) label = "Yıllık Gelir";
    if (slug.includes('emlak')) label = "Rayiç Bedel";
    if (slug.includes('pasaport') || slug.includes('vize')) label = "İşlem Tutarı (Varsa)";

    useEffect(() => { setRes(calculateGeneralTax(amount, slug)); }, [amount, slug]);

    return (
        <div>
             <div className="mb-8">
                <InputGroup label={label}>
                    <StyledInput type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                </InputGroup>
             </div>
             {res !== null && <ResultBox label="Ödenecek Tutar" value={`${res.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />}
        </div>
    );
};

const IBANCalculator = () => {
    const [iban, setIban] = useState('TR');
    const [res, setRes] = useState<any>(null);

    const check = () => {
        setRes(validateIBAN(iban));
    };

    return (
        <div>
            <div className="mb-8">
                <InputGroup label="IBAN No" help="TR ile başlayan 26 haneli numara">
                     <div className="flex gap-2">
                        <StyledInput 
                            value={iban} 
                            onChange={e => setIban(e.target.value)} 
                            maxLength={32}
                            placeholder="TR00 0000..."
                        />
                        <button onClick={check} className="px-6 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-grey transition-colors">
                            Sorgula
                        </button>
                     </div>
                </InputGroup>
            </div>
            {res && (
                <div className="animate-slide-up">
                    <ResultBox 
                        label="Durum" 
                        value={res.message} 
                        highlight={res.valid}
                        subtext={res.bank}
                    />
                </div>
            )}
        </div>
    );
};

const TireCalculator = () => {
    // 205/55 R16 vs 225/45 R17
    const [w1, setW1] = useState(205);
    const [p1, setP1] = useState(55);
    const [r1, setR1] = useState(16);
    const [w2, setW2] = useState(225);
    const [p2, setP2] = useState(45);
    const [r2, setR2] = useState(17);
    const [res, setRes] = useState<any>(null);

    useEffect(() => {
        setRes(calculateTireDiff(w1, p1, r1, w2, p2, r2));
    }, [w1, p1, r1, w2, p2, r2]);

    return (
        <div>
            <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                    <h4 className="font-bold text-sm text-brand-dark/70">Mevcut Lastik</h4>
                    <div className="grid grid-cols-3 gap-2">
                         <StyledInput type="number" placeholder="205" value={w1} onChange={e => setW1(Number(e.target.value))} />
                         <StyledInput type="number" placeholder="55" value={p1} onChange={e => setP1(Number(e.target.value))} />
                         <StyledInput type="number" placeholder="16" value={r1} onChange={e => setR1(Number(e.target.value))} />
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="font-bold text-sm text-brand-dark/70">Yeni Lastik</h4>
                    <div className="grid grid-cols-3 gap-2">
                         <StyledInput type="number" placeholder="225" value={w2} onChange={e => setW2(Number(e.target.value))} />
                         <StyledInput type="number" placeholder="45" value={p2} onChange={e => setP2(Number(e.target.value))} />
                         <StyledInput type="number" placeholder="17" value={r2} onChange={e => setR2(Number(e.target.value))} />
                    </div>
                </div>
            </div>
            {res && (
                <div className="grid md:grid-cols-2 gap-5 animate-slide-up">
                    <ResultBox label="Çap Farkı" value={`%${res.diffPercent.toFixed(2)}`} />
                    <ResultBox label="Sonuç" value={res.status} highlight={res.status.includes('Uyumlu')} />
                </div>
            )}
        </div>
    );
};

const HealthLifestyleCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [val1, setVal1] = useState(70); // Weight or Waist
    const [val2, setVal2] = useState(175); // Height or Hip
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState<'male'|'female'>('female');
    const [activity, setActivity] = useState(1.2);
    const [res, setRes] = useState<any>(null);

    const isCalorie = slug.includes('kalori');
    const isWater = slug.includes('su');
    const isWHR = slug.includes('bel-kalca');

    useEffect(() => {
        setRes(calculateHealthLifestyle(val1, val2, age, gender, activity, slug));
    }, [val1, val2, age, gender, activity, slug]);

    let l1 = "Kilo (kg)", l2 = "Boy (cm)";
    if (isWHR) { l1 = "Bel (cm)"; l2 = "Kalça (cm)"; }

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
                 <InputGroup label={l1}>
                    <StyledInput type="number" value={val1} onChange={e => setVal1(Number(e.target.value))} />
                 </InputGroup>
                 
                 {!isWater && (
                    <InputGroup label={l2}>
                        <StyledInput type="number" value={val2} onChange={e => setVal2(Number(e.target.value))} />
                    </InputGroup>
                 )}

                 {isCalorie && (
                     <>
                        <InputGroup label="Yaş">
                            <StyledInput type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
                        </InputGroup>
                        <InputGroup label="Aktivite Seviyesi">
                            <StyledSelect value={activity} onChange={e => setActivity(Number(e.target.value))}>
                                <option value="1.2">Hareketsiz</option>
                                <option value="1.375">Az Hareketli</option>
                                <option value="1.55">Orta Hareketli</option>
                                <option value="1.725">Çok Hareketli</option>
                            </StyledSelect>
                        </InputGroup>
                     </>
                 )}

                 {(isCalorie || isWHR) && (
                    <InputGroup label="Cinsiyet">
                         <StyledSelect value={gender} onChange={e => setGender(e.target.value as any)}>
                            <option value="female">Kadın</option>
                            <option value="male">Erkek</option>
                         </StyledSelect>
                    </InputGroup>
                 )}
            </div>

            {res !== null && (
                <div className="animate-slide-up">
                    {isCalorie && <ResultBox label="Günlük İhtiyaç" value={`${res} kcal`} highlight />}
                    {isWater && <ResultBox label="Günlük Su İhtiyacı" value={`${res.toFixed(2)} Litre`} highlight />}
                    {isWHR && (
                         <div className="grid grid-cols-2 gap-5">
                            <ResultBox label="Oran" value={res.ratio.toFixed(2)} />
                            <ResultBox label="Durum" value={res.status} highlight={res.status.includes('Sağlıklı')} />
                         </div>
                    )}
                </div>
            )}
        </div>
    );
};

// NEW COMPONENTS

const InterestCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [amount, setAmount] = useState(10000);
    const [rate, setRate] = useState(40);
    const [time, setTime] = useState(30);
    const [res, setRes] = useState<any>(null);

    const isDaily = slug.includes('gunluk') || slug.includes('kmh');
    const timeLabel = isDaily ? "Gün" : "Ay";

    useEffect(() => {
        setRes(calculateInterest(amount, rate, time, slug));
    }, [amount, rate, time, slug]);

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
                <InputGroup label="Anapara (TL)">
                    <StyledInput type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                </InputGroup>
                <InputGroup label="Faiz Oranı (%)">
                    <StyledInput type="number" value={rate} onChange={e => setRate(Number(e.target.value))} />
                </InputGroup>
                <InputGroup label={`Vade (${timeLabel})`}>
                    <StyledInput type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
                </InputGroup>
            </div>
            {res && (
                <div className="grid grid-cols-2 gap-5 animate-slide-up">
                    <ResultBox label="Net Getiri / Faiz" value={`${res.interest.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} highlight />
                    <ResultBox label="Toplam Bakiye" value={`${res.total.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`} />
                </div>
            )}
        </div>
    );
};

const TimeCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [res, setRes] = useState<any>(null);

    const isHours = slug.includes('saat') || slug.includes('uyku');
    
    // Default values
    useEffect(() => {
        if (!v1) setV1(isHours ? "23:00" : new Date().toISOString().split('T')[0]);
        if (!v2) setV2(isHours ? "07:00" : new Date().toISOString().split('T')[0]);
    }, [isHours]);

    useEffect(() => {
        if(v1) setRes(calculateTimeLogic(v1, v2, slug));
    }, [v1, v2, slug]);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
                <InputGroup label={slug.includes('uyku') ? 'Yatış Saati' : 'Başlangıç'}>
                    <StyledInput type={isHours ? "time" : "date"} value={v1} onChange={e => setV1(e.target.value)} />
                </InputGroup>
                {!slug.includes('uyku') && (
                    <InputGroup label="Bitiş">
                        <StyledInput type={isHours ? "time" : "date"} value={v2} onChange={e => setV2(e.target.value)} />
                    </InputGroup>
                )}
            </div>
            {res && (
                <div className="animate-slide-up">
                    {slug.includes('uyku') ? (
                         <div className="grid grid-cols-2 gap-5">
                             <ResultBox label="İdeal Kalkış (5 Döngü)" value={res.t1} />
                             <ResultBox label="İdeal Kalkış (6 Döngü)" value={res.t2} highlight />
                         </div>
                    ) : isHours ? (
                        <ResultBox label="Süre Farkı" value={`${res.h} Saat ${res.m} Dakika`} highlight />
                    ) : (
                        <ResultBox label="İş Günü" value={`${res.days} Gün`} subtext="(Hafta sonları hariç)" highlight />
                    )}
                </div>
            )}
        </div>
    );
};

const RentCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [v1, setV1] = useState(5000); // Rent
    const [v2, setV2] = useState(25); // Rate or Price
    const [res, setRes] = useState<any>(null);

    const isYield = slug.includes('getiri');
    const l1 = isYield ? "Aylık Kira" : "Mevcut Kira";
    const l2 = isYield ? "Konut Fiyatı" : "Zam Oranı (%)";

    useEffect(() => {
        if (isYield && v2 === 25) setV2(1000000); // Default price correction
    }, [isYield]);

    useEffect(() => {
        setRes(calculateRentLogic(v1, v2, slug));
    }, [v1, v2, slug]);

    return (
        <div>
             <div className="grid md:grid-cols-2 gap-5 mb-8">
                 <InputGroup label={l1}><StyledInput type="number" value={v1} onChange={e => setV1(Number(e.target.value))} /></InputGroup>
                 <InputGroup label={l2}><StyledInput type="number" value={v2} onChange={e => setV2(Number(e.target.value))} /></InputGroup>
             </div>
             {res && (
                 <div className="animate-slide-up">
                    {isYield ? (
                        <div className="grid grid-cols-2 gap-5">
                            <ResultBox label="Amortisman" value={`${res.years.toFixed(1)} Yıl`} highlight />
                            <ResultBox label="Yıllık Getiri" value={`%${res.rate.toFixed(2)}`} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-5">
                            <ResultBox label="Yeni Kira" value={`${res.newRent.toLocaleString('tr-TR')} TL`} highlight />
                            <ResultBox label="Fark" value={`${res.diff.toLocaleString('tr-TR')} TL`} />
                        </div>
                    )}
                 </div>
             )}
        </div>
    );
};

const InsuranceCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [val, setVal] = useState(500000);
    const [res, setRes] = useState<any>(null);

    let l = "Araç Değeri";
    if (slug.includes('dask') || slug.includes('konut')) l = "Bina/Eşya Bedeli";
    if (slug.includes('sgk')) l = "Brüt Maaş";

    useEffect(() => { setRes(calculateInsuranceLogic(val, slug)); }, [val, slug]);

    return (
        <div>
            <div className="mb-8">
                <InputGroup label={l}>
                    <StyledInput type="number" value={val} onChange={e => setVal(Number(e.target.value))} />
                </InputGroup>
            </div>
            {res && (
                <ResultBox label="Tahmini Prim / Kesinti" value={`${res.toLocaleString('tr-TR')} TL`} highlight />
            )}
            <div className="text-xs text-brand-grey/50 mt-2 text-center">* Yaklaşık değerdir.</div>
        </div>
    );
};

const SocialBenefitCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [v1, setV1] = useState(1);
    const [v2, setV2] = useState(1);
    const [res, setRes] = useState<any>(null);

    const isBirth = slug.includes('dogum');
    const isPocket = slug.includes('harclik');
    let l1 = isBirth ? "Kaçıncı Çocuk?" : "Toplam Hane Geliri";
    if (isPocket) l1 = "Aylık Gider Toplamı";

    useEffect(() => {
        setRes(calculateSocialBenefit(v1, v2, slug));
    }, [v1, v2, slug]);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
                <InputGroup label={l1}>
                     <StyledInput type="number" value={v1} onChange={e => setV1(Number(e.target.value))} />
                </InputGroup>
                {!isBirth && (
                     <InputGroup label={isPocket ? "Ekstra Gider" : "Kişi Sayısı"}>
                        <StyledInput type="number" value={v2} onChange={e => setV2(Number(e.target.value))} />
                    </InputGroup>
                )}
            </div>
            {res !== null && (
                 <div className="animate-slide-up">
                    {isBirth ? (
                         <ResultBox label="Ödenecek Tutar" value={`${res} TL`} highlight />
                    ) : isPocket ? (
                        <ResultBox label="Günlük İdeal Harçlık" value={`${res.toFixed(2)} TL`} highlight />
                    ) : (
                         <ResultBox label="Durum" value={res.eligible ? "Uygun ✅" : "Uygun Değil ❌"} subtext={`Kişi başı: ${Math.round(res.per)} TL`} highlight={res.eligible} />
                    )}
                 </div>
            )}
        </div>
    );
};

const FinderCalculator: React.FC<{slug: string}> = ({slug}) => {
    const [val, setVal] = useState("");
    const [res, setRes] = useState<string|null>(null);
    const [loading, setLoading] = useState(false);

    let label = "Arama";
    if(slug.includes('swift')) label = "Banka Adı";
    if(slug.includes('sube')) label = "İl / İlçe / Banka";
    if(slug.includes('posta')) label = "Mahalle / Köy";

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            setRes(calculateFinderLogic(val, slug));
            setLoading(false);
        }, 800);
    };

    return (
        <div>
            <div className="mb-8">
                <InputGroup label={label} help="Örn: Garanti, Kadıköy...">
                     <div className="flex gap-2">
                        <StyledInput 
                            value={val} 
                            onChange={e => setVal(e.target.value)} 
                            placeholder="Aramak istediğiniz veriyi girin..."
                        />
                        <button onClick={handleSearch} className="px-6 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-grey transition-colors disabled:opacity-50">
                            {loading ? '...' : 'Bul'}
                        </button>
                     </div>
                </InputGroup>
            </div>
            {res && (
                 <div className="animate-slide-up">
                    <ResultBox label="Sonuç" value={res} highlight />
                 </div>
            )}
        </div>
    );
};

const GenericCalculator = () => (
  <div className="bg-brand-surface border border-dashed border-brand-dark/20 rounded-2xl p-10 text-center">
    <div className="inline-block p-3 rounded-full bg-brand-light mb-4 text-2xl">
       🛠️
    </div>
    <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Hesaplama Modülü Hazırlanıyor</h3>
    <p className="text-brand-grey text-sm max-w-sm mx-auto">Bu araç için özel arayüz geliştirme aşamasındadır. Lütfen daha sonra tekrar deneyin.</p>
  </div>
);
