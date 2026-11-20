/*
 * Векторне оформлення (inline SVG).
 * Палітра: білий #FFFFFF, золото #F4D58D, червоний #B51F27, крафт #E0B48E (вирізи), коричневий #8E5A3A / #5A3420.
 * Усі шари мають viewBox 160×120 (крім newyear — 240×120) і масштабуються під розмір віконця через
 * preserveAspectRatio="… slice": верхній декор прив'язаний до верху, сценка — до низу.
 */
(function () {
  const STAR = '0,-30 7.05,-9.71 28.53,-9.27 11.41,3.71 17.63,24.27 0,12 -17.63,24.27 -11.41,3.71 -28.53,-9.27 -7.05,-9.71';
  const BURST = 'M5 0H15M-5 0H-15M0 -5V-15M0 5V15M3.5 -3.5L10.6 -10.6M-3.5 -3.5L-10.6 -10.6M3.5 3.5L10.6 10.6M-3.5 3.5L-10.6 10.6';

  function svg(body, opts) {
    opts = opts || {};
    const vb = opts.vb || '0 0 160 120';
    const par = opts.par || 'xMidYMid meet';
    const a11y = opts.label ? 'role="img" aria-label="' + opts.label + '"' : 'aria-hidden="true" focusable="false"';
    return '<svg class="art" viewBox="' + vb + '" preserveAspectRatio="' + par + '" ' + a11y + '>' + body + '</svg>';
  }
  const TOP = { par: 'xMidYMin slice' };
  const BOTTOM = { par: 'xMidYMax slice' };

  const top = {
    lights: svg(
      '<path fill="none" stroke="#FFFFFF" stroke-width="1.6" d="M-5 6Q80 46 165 6"/>' +
      '<g fill="#FFFFFF"><circle cx="16.3" cy="20.4" r="4"/><circle cx="58.8" cy="30.8" r="4"/><circle cx="101.3" cy="30.8" r="4"/><circle cx="143.8" cy="20.4" r="4"/></g>' +
      '<g fill="#F4D58D"><circle cx="37.5" cy="27.3" r="4"/><circle cx="80" cy="32" r="4"/><circle cx="122.5" cy="27.3" r="4"/></g>', TOP),
    snow: svg(
      '<path fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" d="M14 24H34M19 15.34L29 32.66M19 32.66L29 15.34M128 22H144M132 15.07L140 28.93M132 28.93L140 15.07M46 44H58M49 38.8L55 49.2M49 49.2L55 38.8M106 44H118M109 38.8L115 49.2M109 49.2L115 38.8"/>' +
      '<g fill="#FFFFFF"><circle cx="76" cy="12" r="1.8"/><circle cx="96" cy="24" r="1.6"/><circle cx="150" cy="48" r="1.6"/><circle cx="8" cy="50" r="1.6"/></g>', TOP),
    stars: svg(
      '<g fill="#FFFFFF"><polygon transform="translate(22 22) scale(0.3)" points="' + STAR + '"/><polygon transform="translate(104 16) scale(0.24)" points="' + STAR + '"/><polygon transform="translate(34 52) scale(0.18)" points="' + STAR + '"/></g>' +
      '<g fill="#F4D58D"><polygon transform="translate(138 28) scale(0.36)" points="' + STAR + '"/><polygon transform="translate(60 12) scale(0.2)" points="' + STAR + '"/><polygon transform="translate(128 56) scale(0.18)" points="' + STAR + '"/></g>', TOP),
    dots: svg(
      '<g fill="#FFFFFF"><circle cx="16" cy="14" r="2.4"/><circle cx="46" cy="30" r="2"/><circle cx="92" cy="10" r="2.4"/><circle cx="130" cy="28" r="2"/><circle cx="150" cy="52" r="2.2"/><circle cx="10" cy="48" r="1.8"/><circle cx="66" cy="20" r="1.6"/><circle cx="112" cy="46" r="1.6"/><circle cx="30" cy="66" r="1.6"/><circle cx="140" cy="76" r="1.6"/></g>', TOP),
    burst: svg(
      '<g transform="translate(80 20)"><path fill="none" stroke="#F4D58D" stroke-width="1.8" stroke-linecap="round" d="' + BURST + '"/><circle fill="#F4D58D" r="2.6"/></g>' +
      '<g fill="#FFFFFF"><circle cx="24" cy="20" r="2"/><circle cx="138" cy="26" r="2.2"/><circle cx="46" cy="44" r="1.6"/><circle cx="118" cy="48" r="1.6"/></g>', TOP)
  };

  const bottom = {
    forest: svg(
      '<g fill="#FFFFFF"><polygon points="18,78 9,93 27,93"/><polygon points="18,87 6,106 30,106"/><polygon points="120,62 107,84 133,84"/><polygon points="120,76 103,103 137,103"/><polygon points="98,82 91,92 105,92"/><polygon points="98,89 89,104 107,104"/></g>' +
      '<g fill="#F4D58D"><polygon points="44,66 32,87 56,87"/><polygon points="44,79 28,104 60,104"/><polygon points="146,74 138,89 154,89"/><polygon points="146,83 135,101 157,101"/></g>' +
      '<path fill="#FFFFFF" d="M0 120V104C30 98 50 108 80 102C110 96 130 106 160 100V120Z"/>', BOTTOM),
    trees: svg(
      '<g fill="#FFFFFF"><polygon points="14,88 6.3,112 21.7,112"/><polygon points="34,80 23.8,112 44.2,112"/><polygon points="54,90 47,112 61,112"/><polygon points="96,86 87.7,112 104.3,112"/><polygon points="118,78 107.1,112 128.9,112"/><polygon points="142,88 134.3,112 149.7,112"/><rect x="0" y="110" width="160" height="10"/></g>' +
      '<polygon points="74,84 65,112 83,112" fill="#F4D58D"/>', BOTTOM),
    village: svg(
      '<g fill="#F4D58D"><rect x="28" y="88" width="24" height="20"/><polygon points="25,89 40,76 55,89"/><polygon points="144,82 136,108 152,108"/></g>' +
      '<g fill="#FFFFFF"><rect x="100" y="84" width="26" height="24"/><polygon points="96,85 113,70 130,85"/><polygon points="66,80 58,108 74,108"/><polygon points="82,88 76,108 88,108"/><polygon points="12,90 6,108 18,108"/><path d="M0 120V106C40 102 120 102 160 106V120Z"/></g>' +
      '<g fill="#E0B48E"><rect x="36" y="94" width="7" height="7"/><rect x="106" y="92" width="5" height="6"/><rect x="115" y="92" width="5" height="6"/><rect x="109" y="100" width="7" height="8"/></g>', BOTTOM),
    town: svg(
      '<path fill="#FFFFFF" d="M0 120V100H12V88H20L26 80L32 88H40V104H48V84L58 74L68 84V104H76V92H88V70H96V62H100V70H108V96H118V86L128 78L138 86V100H150V92H160V120Z"/>' +
      '<g fill="#E0B48E"><rect x="54" y="88" width="4" height="5"/><rect x="62" y="88" width="4" height="5"/><rect x="92" y="78" width="4" height="5"/><rect x="100" y="78" width="4" height="5"/><rect x="92" y="88" width="4" height="5"/><rect x="100" y="88" width="4" height="5"/><rect x="126" y="90" width="4" height="5"/></g>' +
      '<g fill="#F4D58D"><polygon points="142,96 137,112 147,112"/><polygon points="6,98 1,112 11,112"/></g>', BOTTOM),
    house: svg(
      '<g fill="#F4D58D"><rect x="92" y="64" width="6" height="12"/><rect x="60" y="80" width="40" height="40"/><polygon points="54,82 80,62 106,82"/><rect x="40" y="92" width="22" height="28"/><polygon points="37,93 51,82 65,93"/><rect x="98" y="92" width="22" height="28"/><polygon points="95,93 109,82 123,93"/></g>' +
      '<g fill="#E0B48E"><rect x="66" y="88" width="8" height="10"/><rect x="86" y="88" width="8" height="10"/><rect x="75" y="104" width="10" height="16"/><rect x="46" y="100" width="8" height="8"/><rect x="106" y="100" width="8" height="8"/></g>' +
      '<g fill="#FFFFFF"><polygon points="20,90 12,116 28,116"/><polygon points="140,88 131,116 149,116"/><rect x="0" y="114" width="160" height="6"/></g>', BOTTOM),
    cottage: svg(
      '<g fill="#F4D58D"><rect x="84" y="92" width="30" height="22"/><polygon points="80,94 99,78 118,94"/></g>' +
      '<g fill="#E0B48E"><rect x="90" y="100" width="7" height="7"/><rect x="102" y="100" width="7" height="7"/></g>' +
      '<g fill="#FFFFFF"><rect x="50" y="80" width="3" height="36"/><rect x="46" y="72" width="11" height="9" rx="2"/><polygon points="136,84 128,112 144,112"/><polygon points="24,90 17,112 31,112"/><path d="M0 120V112C40 106 120 108 160 112V120Z"/></g>', BOTTOM),
    drift: svg(
      '<polygon points="30,82 22,104 38,104" fill="#F4D58D"/>' +
      '<g fill="#FFFFFF"><polygon points="134,78 124,104 144,104"/><polygon points="114,90 108,104 120,104"/><path d="M0 120V98C24 88 46 106 76 96C106 86 128 102 160 92V120Z"/></g>', BOTTOM),
    hills: svg(
      '<g fill="#FFFFFF"><polygon points="26,76 18,96 34,96"/><polygon points="132,72 122,98 142,98"/></g>' +
      '<path fill="#F4D58D" d="M0 120V98C30 86 60 90 84 100C110 110 136 92 160 96V120Z"/>' +
      '<path fill="#FFFFFF" d="M0 120V112C40 104 80 116 120 108C140 104 150 106 160 108V120Z"/>', BOTTOM),
    mountains: svg(
      '<path fill="#FFFFFF" d="M0 120L34 76L54 96L86 66L118 102L134 88L160 106V120Z"/>' +
      '<g fill="#F4D58D"><polygon points="20,98 14,116 26,116"/><polygon points="64,100 58,116 70,116"/><polygon points="146,102 140,118 152,118"/></g>', BOTTOM),
    candles: svg(
      '<g fill="#FFFFFF"><rect x="50" y="98" width="7" height="18"/><rect x="62" y="92" width="7" height="24"/><rect x="74" y="86" width="8" height="30"/><rect x="87" y="92" width="7" height="24"/><rect x="99" y="98" width="7" height="18"/><rect x="44" y="116" width="68" height="4"/><polygon points="18,88 10,116 26,116"/><polygon points="140,86 131,116 149,116"/></g>' +
      '<g fill="#F4D58D"><ellipse cx="53.5" cy="92" rx="2.5" ry="4.5"/><ellipse cx="65.5" cy="86" rx="2.5" ry="4.5"/><ellipse cx="78" cy="80" rx="2.8" ry="4.8"/><ellipse cx="90.5" cy="86" rx="2.5" ry="4.5"/><ellipse cx="102.5" cy="92" rx="2.5" ry="4.5"/></g>', BOTTOM),
    gift: svg(
      '<g fill="#FFFFFF"><polygon points="22,76 12,104 32,104"/><polygon points="22,66 15,84 29,84"/><rect x="104" y="84" width="36" height="32"/><rect x="100" y="76" width="44" height="10"/><rect x="0" y="114" width="160" height="6"/></g>' +
      '<g fill="#B51F27"><rect x="119" y="76" width="6" height="40"/><path d="M122 76C112 62 101 66 109 76Z"/><path d="M122 76C132 62 143 66 135 76Z"/></g>' +
      '<rect x="46" y="98" width="18" height="16" fill="#F4D58D"/><rect x="53" y="98" width="4" height="16" fill="#FFFFFF"/>', BOTTOM),
    xmas: svg(
      '<g fill="#FFFFFF"><polygon points="12,90 4,112 20,112"/><polygon points="30,76 18,112 42,112"/><polygon points="52,86 42,112 62,112"/><polygon points="108,86 98,112 118,112"/><polygon points="130,76 118,112 142,112"/><polygon points="150,90 142,112 158,112"/><path d="M0 120V110C40 106 120 106 160 110V120Z"/></g>' +
      '<polygon points="80,84 70,110 90,110" fill="#F4D58D"/>', BOTTOM),
    newyear: svg(
      '<g fill="none" stroke="#F4D58D" stroke-width="1.6" stroke-linecap="round"><path transform="translate(40 26)" d="' + BURST + '"/><path transform="translate(204 30) scale(1.1)" d="' + BURST + '"/></g>' +
      '<path fill="#FFFFFF" d="M0 120V98H14V86L24 78L34 86V102H46V80H54V72H60V80H68V100H80V90L92 80L104 90V104H116V94H132V76L142 68L152 76V100H166V88H184V100H196V84L206 76L216 84V98H228V92H240V120Z"/>' +
      '<g fill="#E0B48E"><rect x="50" y="84" width="4" height="5"/><rect x="58" y="84" width="4" height="5"/><rect x="138" y="80" width="4" height="5"/><rect x="138" y="90" width="4" height="5"/><rect x="202" y="88" width="4" height="5"/><rect x="88" y="94" width="4" height="5"/></g>' +
      '<g fill="#F4D58D"><polygon points="110,92 104,110 116,110"/><polygon points="176,94 170,110 182,110"/></g>', { vb: '0 0 240 120', par: 'xMidYMax slice' })
  };

  /* Вбудовані ілюстрації для завдань типу image (якщо немає власного src) */
  const pics = {
    gingerbread: svg(
      '<g fill="#FFFFFF"><circle cx="80" cy="34" r="12"/><rect x="50" y="50" width="60" height="12" rx="6"/><rect x="67" y="45" width="26" height="36" rx="9"/><rect x="65" y="70" width="12" height="36" rx="6" transform="rotate(12 71 76)"/><rect x="83" y="70" width="12" height="36" rx="6" transform="rotate(-12 89 76)"/></g>' +
      '<g fill="#8E5A3A"><circle cx="76" cy="32" r="1.8"/><circle cx="84" cy="32" r="1.8"/></g>' +
      '<path d="M75.5 38Q80 42 84.5 38" fill="none" stroke="#8E5A3A" stroke-width="1.8" stroke-linecap="round"/>' +
      '<g fill="#B51F27"><circle cx="80" cy="56" r="2.8"/><circle cx="80" cy="66" r="2.8"/></g>', { label: 'Імбирний чоловічок' }),
    snowman: svg(
      '<g fill="#FFFFFF"><circle cx="80" cy="92" r="20"/><circle cx="80" cy="63" r="14"/><circle cx="80" cy="40" r="10"/></g>' +
      '<g fill="#5A3420"><rect x="72" y="20" width="16" height="13"/><rect x="68" y="31" width="24" height="3"/><circle cx="77" cy="38" r="1.5"/><circle cx="83" cy="38" r="1.5"/><circle cx="80" cy="61" r="2"/><circle cx="80" cy="69" r="2"/><circle cx="80" cy="88" r="2.2"/></g>' +
      '<polygon points="80,40 92,42.5 80,44" fill="#F4D58D"/>' +
      '<g fill="#B51F27"><rect x="69" y="48" width="22" height="5" rx="2"/><rect x="84" y="50" width="5" height="13" rx="2"/></g>' +
      '<path d="M66 62L50 50M94 62L110 50" fill="none" stroke="#8E5A3A" stroke-width="2.5" stroke-linecap="round"/>', { label: 'Сніговик' }),
    house: svg(
      '<rect x="92" y="36" width="8" height="18" fill="#FFFFFF"/><rect x="54" y="62" width="52" height="44" fill="#FFFFFF"/>' +
      '<polygon points="46,65 80,32 114,65" fill="#B51F27"/>' +
      '<polyline points="48,64 54,59 60,64 66,52 72,57 80,35 88,57 94,52 100,64 106,59 112,64" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<rect x="73" y="82" width="14" height="24" rx="7" fill="#8E5A3A"/>' +
      '<g fill="#F4D58D"><rect x="60" y="72" width="10" height="10"/><rect x="90" y="72" width="10" height="10"/></g>' +
      '<g fill="#B51F27"><circle cx="61" cy="98" r="3"/><circle cx="99" cy="98" r="3"/></g>', { label: 'Пряничний будиночок' }),
    tree: svg(
      '<polygon transform="translate(80 20) scale(0.3)" fill="#F4D58D" points="' + STAR + '"/>' +
      '<g fill="#FFFFFF"><polygon points="80,26 96,52 64,52"/><polygon points="80,40 102,74 58,74"/><polygon points="80,58 110,98 50,98"/></g>' +
      '<rect x="75" y="98" width="10" height="9" fill="#8E5A3A"/>' +
      '<g fill="#B51F27"><circle cx="74" cy="48" r="3"/><circle cx="90" cy="67" r="3"/><circle cx="68" cy="88" r="3"/><circle cx="96" cy="91" r="3"/></g>' +
      '<g fill="#F4D58D"><circle cx="85" cy="45" r="2.6"/><circle cx="70" cy="67" r="2.6"/><circle cx="82" cy="85" r="2.6"/></g>' +
      '<rect x="32" y="90" width="20" height="18" fill="#B51F27"/><rect x="40" y="90" width="4" height="18" fill="#F4D58D"/>' +
      '<rect x="108" y="86" width="22" height="22" fill="#F4D58D"/><rect x="117" y="86" width="4" height="22" fill="#B51F27"/>' +
      '<rect x="20" y="107" width="120" height="13" fill="#FFFFFF"/>', { label: 'Святкова ялинка з подарунками' })
  };

  window.ADVENT_ART = { top: top, bottom: bottom, pics: pics };
})();
