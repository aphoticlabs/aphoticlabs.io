export type GlyphType =
	| 'ridgelines'
	| 'orbits'
	| 'contour'
	| 'lattice'
	| 'spectrum'
	| 'helix'
	| 'scatter'
	| 'heatmap'
	| 'lissajous';

export interface Project {
	id: string;
	name: string;
	field: string;
	year: number;
	glyph: GlyphType;
	href: string;
}

// Placeholder projects — swap in real ones.
export const projects: Project[] = [
	{ id: 'AL-001', name: 'Benthos', field: 'Acoustic sensing', year: 2026, glyph: 'ridgelines', href: '#' },
	{ id: 'AL-002', name: 'Halocline', field: 'Simulation', year: 2026, glyph: 'contour', href: '#' },
	{ id: 'AL-003', name: 'Photophore', field: 'Optics', year: 2025, glyph: 'spectrum', href: '#' },
	{ id: 'AL-004', name: 'Abyssal Array', field: 'Sensor network', year: 2025, glyph: 'lattice', href: '#' },
	{ id: 'AL-005', name: 'Lanternfish', field: 'Machine learning', year: 2025, glyph: 'scatter', href: '#' },
	{ id: 'AL-006', name: 'Thermocline', field: 'Data systems', year: 2024, glyph: 'heatmap', href: '#' },
	{ id: 'AL-007', name: 'Siphonophore', field: 'Distributed compute', year: 2024, glyph: 'orbits', href: '#' },
	{ id: 'AL-008', name: 'Hadal', field: 'Genomics', year: 2024, glyph: 'helix', href: '#' },
	{ id: 'AL-009', name: 'Marine Snow', field: 'Signal analysis', year: 2023, glyph: 'lissajous', href: '#' },
];
