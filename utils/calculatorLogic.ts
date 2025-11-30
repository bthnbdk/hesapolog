

// Loan Calculator Logic
export const calculateLoan = (amount: number, rate: number, months: number) => {
  if (rate === 0) return { monthly: amount / months, total: amount, interest: 0 };
  
  const monthlyRate = rate / 100;
  const factor = Math.pow(1 + monthlyRate, months);
  const monthlyPayment = (amount * monthlyRate * factor) / (factor - 1);
  const totalPayment = monthlyPayment * months;
  const totalInterest = totalPayment - amount;

  return {
    monthly: monthlyPayment,
    total: totalPayment,
    interest: totalInterest
  };
};

// Percentage Logic
export const calculatePercentage = (val1: number, val2: number, type: 'percentOf' | 'increase' | 'decrease' | 'diff') => {
  switch (type) {
    case 'percentOf': 
      return (val1 * val2) / 100;
    case 'increase':
      return val1 * (1 + val2 / 100);
    case 'decrease':
      return val1 * (1 - val2 / 100);
    case 'diff':
      return ((val2 - val1) / val1) * 100;
    default:
      return 0;
  }
};

// VAT Logic
export const calculateVAT = (amount: number, rate: number, type: 'include' | 'exclude') => {
  if (type === 'include') {
    const total = amount * (1 + rate / 100);
    return {
      base: amount,
      vatAmount: total - amount,
      total: total
    };
  } else {
    const base = amount / (1 + rate / 100);
    return {
      base: base,
      vatAmount: amount - base,
      total: amount
    };
  }
};

// BMI Logic
export const calculateBMI = (weight: number, heightCm: number) => {
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let status = "";
  if (bmi < 18.5) status = "Zayıf";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Fazla Kilolu";
  else status = "Obez";
  
  return { bmi, status };
};

// Ideal Weight (Devine Formula)
export const calculateIdealWeight = (heightCm: number, gender: 'male' | 'female') => {
  const heightInches = heightCm / 2.54;
  const base = gender === 'male' ? 50 : 45.5;
  const perInch = 2.3;
  const diff = heightInches - 60; // inches over 5ft
  if (diff <= 0) return base;
  return base + (diff * perInch);
};

// Health Lifestyle (Calories, Water, WHR)
export const calculateHealthLifestyle = (
  val1: number, // Weight or Waist
  val2: number, // Height or Hip
  age: number, 
  gender: 'male' | 'female', 
  activity: number, // 1.2 to 1.9
  slug: string
) => {
  if (slug.includes('kalori')) {
    // Harris-Benedict BMR
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * val1) + (4.799 * val2) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * val1) + (3.098 * val2) - (4.330 * age);
    }
    return Math.round(bmr * activity);
  }
  
  if (slug.includes('su')) {
    // Weight (val1) * 33ml
    return (val1 * 33) / 1000; // Liters
  }
  
  if (slug.includes('bel-kalca')) {
    // Waist (val1) / Hip (val2)
    const ratio = val1 / val2;
    let status = "Sağlıklı ✅";
    const limit = gender === 'male' ? 0.90 : 0.85;
    if (ratio > limit) status = "Riskli ⚠️";
    return { ratio, status };
  }
  
  return 0;
};


// Date Diff
export const calculateDateDiff = (d1: string, d2: string) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Rough years/months
  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
  let days = date2.getDate() - date1.getDate();

  if (days < 0) {
      months--;
      const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
      days += prevMonth.getDate();
  }
  if (months < 0) {
      years--;
      months += 12;
  }

  return { totalDays: diffDays, years, months, days };
};

// Physics Logic
export const calculatePhysics = (val1: number, val2: number, slug: string) => {
  if (slug.includes('hiz')) return val1 / val2; // Distance / Time
  if (slug.includes('ivme')) return val1 / val2; // Velocity Diff / Time
  if (slug.includes('kuvvet')) return val1 * val2; // Mass * Accel
  if (slug.includes('momentum')) return val1 * val2; // Mass * Velocity
  if (slug.includes('gucu')) return val1 / val2; // Work / Time
  if (slug.includes('yogunluk')) return val1 / val2; // Mass / Volume
  if (slug.includes('enerji')) return 0.5 * val1 * (val2 * val2); // Kinetic
  if (slug.includes('powerbank')) return (val1 * 0.7) / val2; // Capacity * efficiency / Device Capacity
  return 0;
};

// Unit Conversion Logic
export const calculateUnit = (val: number, slug: string, direction: 'forward' | 'backward') => {
  if (slug.includes('sicaklik')) {
    if (direction === 'forward') return (val * 1.8) + 32; // C -> F
    return (val - 32) / 1.8; // F -> C
  }
  if (slug.includes('km-mil')) {
    if (direction === 'forward') return val * 0.621371; // km -> mile
    return val * 1.60934; // mile -> km
  }
  if (slug.includes('km-metre')) {
    if (direction === 'forward') return val * 1000;
    return val / 1000;
  }
  if (slug.includes('mb-gb')) {
    if (direction === 'forward') return val / 1024; // MB -> GB
    return val * 1024; // GB -> MB
  }
  if (slug.includes('dakika')) {
      if (direction === 'forward') return val / 60; // Min -> Hour
      return val * 60; // Min -> Sec
  }
  return 0;
};

// Bill/Consumption Logic
export const calculateBill = (consumption: number, price: number) => {
    return consumption * price;
};

// Salary & Severance
export const calculateSalaryLogic = (gross: number, years: number, type: string) => {
    if (type.includes('kidem')) {
        // Simple Severance: Gross * Years
        return gross * years;
    }
    if (type.includes('issizlik')) {
        // Unemployment: %40 of gross
        return gross * 0.40;
    }
    if (type.includes('ihbar')) {
        // Notice pay weeks approx
        let weeks = 2;
        if (years >= 3) weeks = 8;
        else if (years >= 1.5) weeks = 6;
        else if (years >= 0.5) weeks = 4;
        
        const weekly = gross / 4;
        return weekly * weeks;
    }
    return 0;
};

// Currency / Gold (Mock Rates for Demo)
export const calculateCurrency = (amount: number, slug: string) => {
    const RATES: Record<string, number> = {
        'dolar': 34.20,
        'euro': 37.50,
        'sterlin': 43.10,
        'gram-altin': 2950,
        'ceyrek-altin': 4850,
        'bilezik': 2800 
    };

    let rate = 1;
    if (slug.includes('dolar') || slug.includes('doviz')) rate = RATES['dolar'];
    else if (slug.includes('euro')) rate = RATES['euro'];
    else if (slug.includes('gram')) rate = RATES['gram-altin'];
    else if (slug.includes('ceyrek')) rate = RATES['ceyrek-altin'];
    else if (slug.includes('bilezik')) rate = RATES['bilezik'];
    
    return amount * rate;
};

// Health Dates (Pregnancy, Period)
export const calculateHealthDate = (dateStr: string, slug: string, cycleDays: number = 28) => {
    const date = new Date(dateStr);
    
    if (slug.includes('gebelik') || slug.includes('hamilelik') || slug.includes('dogum')) {
        const dueDate = new Date(date);
        dueDate.setDate(date.getDate() + 280);
        
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - date.getTime());
        const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
        
        return { 
            date: dueDate.toLocaleDateString('tr-TR'), 
            extra: `${diffWeeks} Hafta` 
        };
    }
    
    if (slug.includes('adet') || slug.includes('yumurtlama')) {
        const nextPeriod = new Date(date);
        nextPeriod.setDate(date.getDate() + cycleDays);
        
        const ovulation = new Date(nextPeriod);
        ovulation.setDate(nextPeriod.getDate() - 14);
        
        return {
            date: nextPeriod.toLocaleDateString('tr-TR'),
            extra: `Yumurtlama: ${ovulation.toLocaleDateString('tr-TR')}`
        };
    }
    
    return { date: '', extra: '' };
};

// Education (Net, Grade)
export const calculateEducation = (val1: number, val2: number, slug: string) => {
    if (slug.includes('net')) {
        // Val1: Doğru, Val2: Yanlış, 4 wrong 1 right
        return val1 - (val2 / 4);
    }
    if (slug.includes('ehliyet') || slug.includes('sinav')) {
        // Driver License: 50 Questions, 2 points each. Val1: True answers
        return val1 * 2;
    }
    if (slug.includes('not') || slug.includes('puan')) {
        return (val1 + val2) / 2;
    }
    return 0;
};

// Vehicle Tax (MTV/OTV Simple)
export const calculateVehicleTax = (priceOrCC: number, slug: string) => {
    if (slug.includes('mtv')) {
        if (priceOrCC <= 1300) return 3000;
        if (priceOrCC <= 1600) return 5800;
        if (priceOrCC <= 2000) return 11000;
        return 18000;
    }
    if (slug.includes('otv')) {
        let rate = 0.80; 
        if (priceOrCC > 1000000) rate = 1.10;
        return priceOrCC * rate;
    }
    if (slug.includes('ceza') || slug.includes('trafik') || slug.includes('muayene') || slug.includes('hgs')) {
        // Early payment discount 25% for fines, flat for others
        return priceOrCC * 0.75;
    }
    if (slug.includes('noter')) return 1450; // Mock fixed
    return 0;
};

// Geometry (Area, Volume, Desi)
export const calculateGeometry = (v1: number, v2: number, v3: number, slug: string) => {
    if (slug.includes('desi')) {
        // v1:en, v2:boy, v3:yukseklik
        return (v1 * v2 * v3) / 3000;
    }
    if (slug.includes('hacim')) {
        return v1 * v2 * v3;
    }
    if (slug.includes('brut')) {
        // v1: net area, v2: common area %
        return v1 / (1 - (v2 / 100));
    }
    if (slug.includes('metrekare') || slug.includes('alan')) {
        return v1 * v2;
    }
    return 0;
};

// General Tax (Income, Stamp, Property)
export const calculateGeneralTax = (amount: number, slug: string) => {
    if (slug.includes('gelir')) {
        // Simplified Progressive
        if (amount <= 110000) return amount * 0.15;
        if (amount <= 230000) return 16500 + (amount - 110000) * 0.20;
        return 40500 + (amount - 230000) * 0.27;
    }
    if (slug.includes('damga')) return amount * 0.00948;
    if (slug.includes('tapu')) return amount * 0.04; 
    if (slug.includes('emlak')) return amount * 0.002;
    if (slug.includes('gumruk')) return amount * 0.20;
    if (slug.includes('stopaj')) return amount * 0.20;
    if (slug.includes('pasaport')) return 8000; // Mock fixed
    if (slug.includes('vize')) return 4500; // Mock fixed
    if (slug.includes('sirket')) return 12000; // Mock fixed
    return amount * 0.18;
};

// IBAN Validation
export const validateIBAN = (iban: string) => {
  // Remove spaces and uppercase
  const clean = iban.replace(/\s/g, '').toUpperCase();
  
  if (!clean.startsWith('TR')) return { valid: false, message: "IBAN 'TR' ile başlamalıdır." };
  if (clean.length !== 26) return { valid: false, message: "IBAN 26 karakter olmalıdır." };
  
  // Move first 4 chars to end: TRAA... -> ...TRAA
  const reordered = clean.substring(4) + clean.substring(0, 4);
  
  // Convert letters to numbers (A=10, B=11... Z=35)
  const expanded = reordered.split('').map(c => {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) return code - 55;
    return c;
  }).join('');
  
  // Mod 97 check using string logic to avoid overflow issues
  let remainder = 0;
  for (let i = 0; i < expanded.length; i++) {
     const digit = parseInt(expanded[i]);
     remainder = (remainder * 10 + digit) % 97;
  }
  
  const valid = remainder === 1;
  return { 
      valid, 
      message: valid ? "IBAN Geçerli ✅" : "IBAN Geçersiz (Sağlama Hatası) ❌",
      bank: valid ? "Banka Tespiti (Demo)" : "-"
  };
};

// Tire Size Calculation
export const calculateTireDiff = (w1: number, p1: number, r1: number, w2: number, p2: number, r2: number) => {
    // Diameter = (Width * Profile / 100 * 2) + (Rim * 25.4)
    const d1 = (w1 * p1 / 100 * 2) + (r1 * 25.4);
    const d2 = (w2 * p2 / 100 * 2) + (r2 * 25.4);
    
    const diff = ((d2 - d1) / d1) * 100;
    const absDiff = Math.abs(diff);
    
    let status = "Uyumlu ✅";
    if (absDiff > 3) status = "Önerilmez ❌ (>%3 Fark)";
    else if (absDiff > 2.5) status = "Riskli ⚠️";

    return {
        oldDia: d1,
        newDia: d2,
        diffPercent: diff,
        status
    };
};

// NEW: Interest Calculation
export const calculateInterest = (amount: number, rate: number, time: number, slug: string) => {
    // time: days if daily/kmh, months otherwise
    if (slug.includes('gunluk') || slug.includes('kmh')) {
        const interest = (amount * rate * time) / 36500;
        return { interest, total: amount + interest };
    }
    // Monthly deposit or bes (treated as compound interest mock)
    const interest = (amount * rate * (time * 30)) / 36500;
    return { interest, total: amount + interest };
};

// NEW: Time / Workday / Hour Difference
export const calculateTimeLogic = (v1: string, v2: string, slug: string) => {
    if (slug.includes('uyku')) {
        // v1: bedtime (HH:MM)
        const [h, m] = v1.split(':').map(Number);
        const date = new Date();
        date.setHours(h, m, 0, 0);
        // +90 min * 5 (7.5 hours) or * 6 (9 hours)
        const d1 = new Date(date.getTime() + 90 * 60000 * 5); // 5 cycles
        const d2 = new Date(date.getTime() + 90 * 60000 * 6); // 6 cycles
        return {
            t1: d1.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            t2: d2.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
    }
    if (slug.includes('saat')) {
        const [h1, m1] = v1.split(':').map(Number);
        const [h2, m2] = v2.split(':').map(Number);
        const diff = Math.abs((h2 * 60 + m2) - (h1 * 60 + m1));
        const h = Math.floor(diff / 60);
        const m = diff % 60;
        return { h, m, totalMin: diff };
    }
    if (slug.includes('is-gunu') || slug.includes('izin')) {
        const d1 = new Date(v1);
        const d2 = new Date(v2);
        let count = 0;
        const cur = new Date(d1);
        while (cur <= d2) {
            const day = cur.getDay();
            if (day !== 0 && day !== 6) count++; // 0 Sun, 6 Sat
            cur.setDate(cur.getDate() + 1);
        }
        return { days: count };
    }
    return null;
};

// NEW: Rent / Yield / Increase
export const calculateRentLogic = (val1: number, val2: number, slug: string) => {
    if (slug.includes('getiri')) {
        // val1: rent, val2: price
        if (val1 === 0 || val2 === 0) return null;
        const annual = val1 * 12;
        const years = val2 / annual;
        const rate = (annual / val2) * 100;
        return { years, rate };
    }
    if (slug.includes('artis') || slug.includes('zam')) {
        // val1: rent, val2: rate
        const inc = val1 * (val2 / 100);
        return { newRent: val1 + inc, diff: inc };
    }
    return null;
};

// NEW: Insurance (Mock)
export const calculateInsuranceLogic = (val: number, slug: string) => {
    if (slug.includes('dask')) return val * 0.0015 + 150; 
    if (slug.includes('konut')) return val * 0.0025 + 200;
    if (slug.includes('kasko')) return val * 0.018; 
    if (slug.includes('trafik')) return 4500 + (val > 0 ? 0 : 0);
    if (slug.includes('sgk')) return val * 0.345; // Approx total premium
    return 0;
};

// NEW: Social Benefits
export const calculateSocialBenefit = (v1: number, v2: number, slug: string) => {
    if (slug.includes('dogum')) {
        // v1: child order
        if (v1 === 1) return 300;
        if (v1 === 2) return 400;
        return 600;
    }
    if (slug.includes('bakim')) {
        // v1: income, v2: people
        if(v2 === 0) return null;
        const per = v1 / v2;
        const limit = 11339; // 2024 Approx
        return { per, eligible: per < limit };
    }
    if (slug.includes('harclik')) {
        return (v1 + v2) / 30; // Daily mockup
    }
    return null;
};

// NEW: Finder Mock
export const calculateFinderLogic = (val: string, slug: string) => {
    if(slug.includes('swift')) return `SWIFT: ${val.substring(0,4).toUpperCase()}TR2A`;
    if(slug.includes('sube')) return `Şube Kodu: 1${Math.floor(Math.random()*900)}`;
    if(slug.includes('posta')) return `PK: 34${Math.floor(Math.random()*900)}`;
    return "Bulunamadı";
};
