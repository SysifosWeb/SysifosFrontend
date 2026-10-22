"""Regenerate the embedded Spanish variable font subsets without changing the typeface.

Optional authoring dependencies: fonttools[woff] and brotli. Production builds use
already generated CSS and do not require Python. Run from any directory with:
    python3 scripts/generate-critical-fonts.py
"""
from pathlib import Path
from io import BytesIO
import base64
from fontTools import subset

ROOT = Path(__file__).resolve().parents[1]
RANGES = 'U+0000-007F,U+00A0-00BF,U+00C1,U+00C9,U+00CD,U+00D1,U+00D3,U+00DA,U+00DC,U+00E1,U+00E9,U+00ED,U+00F1,U+00F3,U+00FA,U+00FC,U+2000-206F,U+20AC,U+2190-2199,U+2665,U+2713'
MARKER = '/* Critical Spanish variable faces. Original WOFF2 files remain the fallback for other scripts. */'
faces = []
for name, family, weights in [('Manrope', 'Manrope', '200 800'), ('SourceSans3', 'Source Sans 3', '200 900')]:
    options = subset.Options()
    options.flavor = 'woff2'
    options.hinting = False
    font = subset.load_font(str(ROOT / 'public/fonts' / f'{name}.ttf'), options)
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=subset.parse_unicodes(RANGES))
    subsetter.subset(font)
    output = BytesIO()
    subset.save_font(font, output, options)
    data = base64.b64encode(output.getvalue()).decode('ascii')
    faces.append(f"@font-face {{ font-family:'{family}'; font-weight:{weights}; font-style:normal; font-display:swap; src:url('data:font/woff2;base64,{data}') format('woff2'); unicode-range:{RANGES}; }}")
stylesheet = ROOT / 'assets/css/base.css'
source = stylesheet.read_text()
start = source.index(MARKER)
end = source.index(':root', start)
stylesheet.write_text(source[:start] + MARKER + '\n' + '\n'.join(faces) + '\n' + source[end:])
