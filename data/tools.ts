import { ToolData } from '../types';
import { allToolsData } from './tools/index';

const rawTools: ToolData[] = allToolsData;

export const getToolBySlug = (slug: string) => rawTools.find(t => t.slug === slug);
export const getAllTools = () => rawTools;
export const getRelatedTools = (currentSlug: string) => {
    // Simple category matching based on slug keywords
    const getCategory = (slug: string) => {
        if (slug.includes('kredi') || slug.includes('faiz') || slug.includes('banka') || slug.includes('doviz') || slug.includes('altin')) return 'finans';
        if (slug.includes('bmi') || slug.includes('kalori') || slug.includes('gebelik') || slug.includes('saglik') || slug.includes('bebek')) return 'saglik';
        if (slug.includes('yuzde') || slug.includes('matematik') || slug.includes('alan') || slug.includes('hacim')) return 'matematik';
        if (slug.includes('maas') || slug.includes('ucret') || slug.includes('tazminat') || slug.includes('izin')) return 'calisma';
        if (slug.includes('arac') || slug.includes('yakit') || slug.includes('trafik') || slug.includes('hiz')) return 'arac';
        return 'diger';
    };
    const cat = getCategory(currentSlug);
    return rawTools.filter(t => t.slug !== currentSlug && getCategory(t.slug) === cat).slice(0, 5);
};