import { responsiveAtom } from '@/store/responsve';
import { useAtomValue } from 'jotai';

export default function useResponsive(keys: 'sm' | 'md' | 'lg' | 'xl' | '2xl') {
	const fullResponsive = useAtomValue(responsiveAtom);
	return fullResponsive[keys];
}
