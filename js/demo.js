// Demo page behaviour.

/* ==========================================================================
   Battle cards — DATA
   Edit this block to update content. Everything below it renders from here.

   Cell values: 'yes' | 'partial' | 'no' | any text.
   Add a note with an object: { v: 'partial', note: 'Via partner' }
   Set SAMPLE_CONTENT to false once real battle card content is in.

   Scores are calculated from the comparison table: yes = 1, partial = 0.5,
   no = 0 (text-only cells are not scored), shown out of 100.
   High >= 75 (green), Medium 50-74 (yellow), Low < 50 (red).
   ========================================================================== */
var BC_DATA = {
  SAMPLE_CONTENT: true,
  logo: 'img/logos/peopleshr.webp',

  categories: [
    { label: 'Core HR', rows: [
      ['records',  'Employee records & org structure'],
      ['ess',      'Employee self-service & mobile app'],
      ['workflow', 'Configurable approval workflows']
    ]},
    { label: 'Payroll & compliance', rows: [
      ['payroll',  'In-house payroll engine'],
      ['statutory','Local statutory compliance (SL, PH, ID, MY)'],
      ['multi',    'Multi-country payroll in one platform']
    ]},
    { label: 'Time & talent', rows: [
      ['time',     'Time, attendance & shift rostering'],
      ['perf',     'Performance & goals'],
      ['recruit',  'Recruitment / ATS']
    ]},
    { label: 'Platform', rows: [
      ['ai',       'AI assistant & analytics'],
      ['deploy',   'Deployment options'],
      ['api',      'Open APIs & integrations']
    ]},
    { label: 'Commercial', rows: [
      ['pricing',  'Pricing model'],
      ['impl',     'Typical implementation time'],
      ['support',  'Local implementation & support team']
    ]}
  ],

  peopleshr: {
    records: 'yes', ess: 'yes', workflow: 'yes',
    payroll: 'yes', statutory: { v: 'yes', note: 'Built and maintained in-house per country' }, multi: 'yes',
    time: 'yes', perf: 'yes', recruit: { v: 'partial', note: 'Core ATS, no job-board marketplace' },
    ai: { v: 'yes', note: 'Agentic HR assistant included' }, deploy: 'Cloud or on-premise', api: 'yes',
    pricing: 'Per employee / month, modular', impl: '8–12 weeks', support: { v: 'yes', note: 'Teams across Asia' }
  },

  competitors: [
    {
      id: 'darwinbox', logo: 'img/logos/darwinbox.png', name: 'Darwinbox', meta: 'India · Enterprise HCM',
      positioning: 'Strong brand with large enterprises in India, sells a broad "all-in-one" suite with a modern UI.',
      win: [
        'Payroll outside India often relies on partners. We run it natively.',
        'Faster time to value for mid-market: 8–12 weeks vs. long enterprise rollouts.',
        'On-premise option for regulated industries.'
      ],
      risk: [
        'Expect a polished mobile UX demo. Lead with payroll and compliance depth instead.',
        'May discount heavily to win logos in new markets.'
      ],
      objections: [
        { q: '"Darwinbox has more enterprise logos."', a: 'Ask how many of those logos run payroll in this country on Darwinbox. Offer local reference customers.' }
      ],
      values: {
        records: 'yes', ess: 'yes', workflow: 'yes',
        payroll: { v: 'partial', note: 'Native in India, partners elsewhere' }, statutory: 'partial', multi: 'partial',
        time: 'yes', perf: 'yes', recruit: 'yes',
        ai: 'yes', deploy: 'Cloud only', api: 'yes',
        pricing: 'Per employee / month, enterprise tiers', impl: '4–6 months', support: 'partial'
      }
    },
    {
      id: 'sunfish', logo: 'img/logos/sunfish.png', name: 'Sunfish', meta: 'Indonesia · HRIS & payroll',
      positioning: 'Established in Indonesia with deep local payroll knowledge and a long customer base.',
      win: [
        'Modern, mobile-first employee experience vs. a dated interface.',
        'One platform across multiple countries for regional groups.',
        'AI assistant and analytics included.'
      ],
      risk: [
        'Strong incumbent in Indonesia. Customers fear payroll migration risk.',
        'Competitive on price for local-only deals.'
      ],
      objections: [
        { q: '"Sunfish already knows Indonesian payroll."', a: 'So do we. Show the statutory module live and offer a parallel payroll run during migration.' }
      ],
      values: {
        records: 'yes', ess: 'partial', workflow: 'yes',
        payroll: 'yes', statutory: { v: 'yes', note: 'Strong in Indonesia' }, multi: 'partial',
        time: 'yes', perf: 'partial', recruit: 'partial',
        ai: 'no', deploy: 'Cloud or on-premise', api: 'partial',
        pricing: 'Licence + maintenance', impl: '3–5 months', support: { v: 'partial', note: 'Mostly Indonesia' }
      }
    },
    {
      id: 'sprout', logo: 'img/logos/sprout.png', name: 'Sprout Solutions', meta: 'Philippines · SME HR & payroll',
      positioning: 'Popular with Philippine SMEs. Sells on simple payroll and affordable pricing.',
      win: [
        'Scales past SME: complex structures, workflows and multi-entity groups.',
        'Full talent suite (performance, recruitment) in the same platform.',
        'Regional coverage if the customer expands beyond the Philippines.'
      ],
      risk: [
        'Lower entry price for small headcounts.',
        'Strong local brand awareness in the Philippines.'
      ],
      objections: [
        { q: '"Sprout is cheaper."', a: 'Compare total cost at 2–3 years of growth, including add-ons and a second country.' }
      ],
      values: {
        records: 'yes', ess: 'yes', workflow: 'partial',
        payroll: 'yes', statutory: { v: 'partial', note: 'Philippines only' }, multi: 'no',
        time: 'yes', perf: 'partial', recruit: 'partial',
        ai: 'partial', deploy: 'Cloud only', api: 'partial',
        pricing: 'Per employee / month, SME bundles', impl: '4–8 weeks', support: { v: 'yes', note: 'Philippines' }
      }
    },
    {
      id: 'zoho', logo: 'img/logos/zoho.png', name: 'Zoho People', meta: 'Global · SME HR suite',
      positioning: 'Low-cost HR module inside the wider Zoho ecosystem.',
      win: [
        'Native payroll and local compliance vs. limited regional payroll.',
        'Dedicated HR implementation and support team.'
      ],
      risk: [
        'Very low price, and often already in use for CRM or mail.'
      ],
      objections: [
        { q: '"We already use Zoho for everything."', a: 'We integrate with Zoho via open APIs. Keep Zoho for CRM, run HR and payroll properly.' }
      ],
      values: {
        records: 'yes', ess: 'yes', workflow: 'yes',
        payroll: 'partial', statutory: 'no', multi: 'no',
        time: 'yes', perf: 'yes', recruit: { v: 'partial', note: 'Separate Zoho Recruit product' },
        ai: 'partial', deploy: 'Cloud only', api: 'yes',
        pricing: 'Per user / month, low entry', impl: 'Self-serve', support: 'no'
      }
    }
  ]
};

/* ==========================================================================
   Battle cards — UI
   ========================================================================== */
(function(){
  var page = document.querySelector('.bc-page');
  if(!page) return;

  var MAX = 2;
  var sel = [document.getElementById('bc-select-0'), document.getElementById('bc-select-1')];
  var ico = [document.getElementById('bc-icon-0'), document.getElementById('bc-icon-1')];
  var slot1 = document.getElementById('bc-slot-1');
  var vs1 = document.getElementById('bc-vs-1');
  var addBtn = document.getElementById('bc-add');
  var removeBtn = document.getElementById('bc-remove-1');
  var card = document.getElementById('bc-card');
  var byId = {};
  BC_DATA.competitors.forEach(function(c){ byId[c.id] = c; });

  var PHR = { id: 'peopleshr', name: 'PeoplesHR', logo: BC_DATA.logo, values: BC_DATA.peopleshr, isPhr: true };
  var picked = [];
  var showSecond = false;

  var ICON = {
    check: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    alert: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5l7 12.5H3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 8.5v3.2M10 14v.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    chat:  '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4.5h12a1 1 0 011 1v7a1 1 0 01-1 1H9l-3.5 3v-3H4a1 1 0 01-1-1v-7a1 1 0 011-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    up:    '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15V5M5.5 9.5L10 5l4.5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function esc(s){
    return String(s).replace(/[&<>"']/g, function(ch){
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch];
    });
  }
  function rawVal(x){ return x && typeof x === 'object' ? x.v : x; }
  function logo(p, cls){ return p.logo ? '<img class="' + cls + '" src="' + esc(p.logo) + '" alt="" />' : ''; }

  /* ---------- Scoring ---------- */
  var POINTS = { yes: 1, partial: 0.5, no: 0 };
  function score(values, rows){
    var got = 0, n = 0, tally = { yes: 0, partial: 0, no: 0 };
    rows.forEach(function(r){
      var v = rawVal(values[r[0]]);
      if(v in POINTS){ got += POINTS[v]; n++; tally[v]++; }
    });
    return { pct: n ? Math.round(got / n * 100) : null, n: n, tally: tally };
  }
  function band(pct){
    if(pct == null) return { cls: 'is-none', label: 'No data' };
    if(pct >= 75) return { cls: 'is-high', label: 'High' };
    if(pct >= 50) return { cls: 'is-mid', label: 'Medium' };
    return { cls: 'is-low', label: 'Low' };
  }
  var allRows = [];
  BC_DATA.categories.forEach(function(c){ allRows = allRows.concat(c.rows); });

  /* ---------- Picker ---------- */
  function fillSelect(i, current, exclude){
    var html = '<option value="">Select competitor</option>';
    BC_DATA.competitors.forEach(function(c){
      if(c.id === exclude) return;
      html += '<option value="' + c.id + '"' + (c.id === current ? ' selected' : '') + '>' + esc(c.name) + '</option>';
    });
    sel[i].innerHTML = html;
    sel[i].classList.toggle('is-empty', !current);
    var c = byId[current];
    ico[i].hidden = !(c && c.logo);
    if(c && c.logo) ico[i].src = c.logo;
    sel[i].parentNode.classList.toggle('has-icon', !!(c && c.logo));
  }

  /* ---------- Render pieces ---------- */
  var R = 50, C = 2 * Math.PI * R;
  function donut(p, s, lead){
    var b = band(s.pct);
    var len = s.pct == null ? 0 : C * s.pct / 100;
    return '<figure class="bc-score' + (p.isPhr ? ' is-phr' : '') + '">' +
      '<div class="bc-donut ' + b.cls + '" role="img" aria-label="' + esc(p.name) + ' score ' + (s.pct == null ? 'not available' : s.pct + ' out of 100, ' + b.label) + '">' +
        '<svg viewBox="0 0 120 120"><circle class="bc-donut-track" cx="60" cy="60" r="' + R + '"/>' +
        '<circle class="bc-donut-arc" cx="60" cy="60" r="' + R + '" stroke-dasharray="0 ' + C + '" data-len="' + len + '"/></svg>' +
        '<div class="bc-donut-num"><strong>' + (s.pct == null ? '–' : s.pct) + '</strong><span>/100</span></div>' +
      '</div>' +
      '<figcaption>' +
        '<span class="bc-score-name">' + logo(p, 'bc-score-logo') + esc(p.name) + '</span>' +
        '<span class="bc-chip ' + b.cls + '"><i></i>' + b.label + '</span>' +
        '<span class="bc-tally">' + s.tally.yes + ' ✓ · ' + s.tally.partial + ' ◐ · ' + s.tally.no + ' ✕</span>' +
      '</figcaption>' +
      (lead ? '<p class="bc-lead ' + lead.cls + '">' + (lead.icon || '') + '<span>' + lead.html + '</span></p>' : '') +
    '</figure>';
  }

  function overview(parties){
    var scores = parties.map(function(p){ return score(p.values, allRows); });
    var phr = scores[0].pct;
    // One lead line per card, so every score card has the same shape
    var ahead = 0;
    var leads = parties.map(function(p, i){
      if(i === 0) return null;
      var d = phr - scores[i].pct;
      if(d > 0) ahead++;
      return d > 0 ? { cls: 'is-ahead', icon: ICON.up, html: 'PeoplesHR leads by <strong>' + d + ' pts</strong>' }
           : d < 0 ? { cls: 'is-behind', icon: ICON.up, html: 'Leads PeoplesHR by <strong>' + (-d) + ' pts</strong>' }
           : { cls: 'is-level', html: 'Level with PeoplesHR' };
    });
    var rivals = parties.length - 1;
    leads[0] = { cls: ahead === rivals ? 'is-ahead' : 'is-level', icon: ahead === rivals ? ICON.up : '',
      html: 'Ahead of <strong>' + ahead + ' of ' + rivals + '</strong> ' + (rivals === 1 ? 'competitor' : 'competitors') };

    var cats = BC_DATA.categories.map(function(cat){
      return '<div class="bc-cat-card"><h4>' + esc(cat.label) + '</h4>' +
        parties.map(function(p){
          var s = score(p.values, cat.rows), b = band(s.pct);
          return '<div class="bc-bar-row' + (p.isPhr ? ' is-phr' : '') + '">' +
            '<span class="bc-bar-name">' + logo(p, 'bc-bar-logo') + esc(p.name) + '</span>' +
            '<span class="bc-bar"><span class="bc-bar-fill ' + b.cls + '" style="width:' + (s.pct || 0) + '%"></span></span>' +
            '<span class="bc-bar-num">' + (s.pct == null ? '–' : s.pct) + '</span>' +
          '</div>';
        }).join('') + '</div>';
    }).join('');

    return '<section class="bc-block bc-overview" aria-labelledby="bc-ov-title">' +
      '<h2 class="bc-section-title" id="bc-ov-title">Overview</h2>' +
      '<div class="bc-scores">' + parties.map(function(p, i){ return donut(p, scores[i], leads[i]); }).join('') + '</div>' +
      '<h3 class="bc-sub-title">Score by category</h3>' +
      '<div class="bc-cats">' + cats + '</div>' +
      '<p class="bc-footnote">Score = capabilities covered across ' + scores[0].n + ' scored checks (✓ = 1, ◐ = ½, ✕ = 0; text rows not scored). ' +
        '<span class="bc-key is-high"><i></i>High 75+</span><span class="bc-key is-mid"><i></i>Medium 50–74</span><span class="bc-key is-low"><i></i>Low under 50</span></p>' +
    '</section>';
  }

  function tile(kind, icon, title, inner){
    return '<div class="bc-tile ' + kind + '"><div class="bc-tile-head"><span class="bc-tile-ico">' + icon + '</span><h4>' + title + '</h4></div>' + inner + '</div>';
  }
  function items(list, icon){
    if(!list || !list.length) return '<p class="bc-empty">Not added yet.</p>';
    return '<ul class="bc-points">' + list.map(function(t){ return '<li>' + icon + '<span>' + esc(t) + '</span></li>'; }).join('') + '</ul>';
  }
  function tipset(c){
    var obj = (c.objections || []).map(function(o){
      return '<div class="bc-qa"><p class="bc-q">' + esc(o.q) + '</p><p class="bc-a">' + esc(o.a) + '</p></div>';
    }).join('') || '<p class="bc-empty">Not added yet.</p>';
    return '<article class="bc-tipset">' +
      '<header class="bc-tipset-head">' + logo(c, 'bc-tipset-logo') +
        '<div><h3>vs ' + esc(c.name) + '</h3><p class="bc-qmeta">' + esc(c.meta || '') + '</p></div></header>' +
      (c.positioning ? '<p class="bc-positioning">' + esc(c.positioning) + '</p>' : '') +
      '<div class="bc-tiles">' +
        tile('is-win', ICON.check, 'Where we win', items(c.win, ICON.check)) +
        tile('is-risk', ICON.alert, 'Watch out for', items(c.risk, ICON.alert)) +
        tile('is-obj', ICON.chat, 'Objection handling', obj) +
      '</div>' +
    '</article>';
  }

  function cell(val){
    if(val == null) return '<span class="bc-val is-pending">—</span>';
    var v = rawVal(val);
    var note = typeof val === 'object' && val.note ? '<span class="bc-note">' + esc(val.note) + '</span>' : '';
    var map = { yes: ['is-yes', '✓ Yes'], partial: ['is-partial', '◐ Partial'], no: ['is-no', '✕ No'] };
    var m = map[v] || ['is-text', esc(v)];
    return '<span class="bc-val ' + m[0] + '">' + m[1] + '</span>' + note;
  }

  function table(parties){
    var head = '<tr><th scope="col">Capability</th>' + parties.map(function(p){
      return '<th scope="col"' + (p.isPhr ? ' class="is-phr"' : '') + '><span class="bc-th">' + logo(p, 'bc-th-logo') + esc(p.name) + '</span></th>';
    }).join('') + '</tr>';
    var body = BC_DATA.categories.map(function(cat){
      var rows = '<tr class="bc-cat"><th colspan="' + (parties.length + 1) + '" scope="colgroup">' + esc(cat.label) + '</th></tr>';
      cat.rows.forEach(function(r){
        rows += '<tr><th scope="row">' + esc(r[1]) + '</th>' + parties.map(function(p){
          return '<td' + (p.isPhr ? ' class="is-phr"' : '') + '>' + cell(p.values[r[0]]) + '</td>';
        }).join('') + '</tr>';
      });
      return rows;
    }).join('');
    return '<section class="bc-block" aria-labelledby="bc-fc-title"><h2 class="bc-section-title" id="bc-fc-title">Feature comparison</h2>' +
      '<div class="bc-table-wrap"><table class="bc-table"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div></section>';
  }

  function render(){
    var comps = picked.map(function(id){ return byId[id]; });
    page.classList.toggle('has-card', comps.length > 0);
    card.hidden = comps.length === 0;
    if(!comps.length){ card.innerHTML = ''; return; }
    var parties = [PHR].concat(comps);

    card.innerHTML =
      (BC_DATA.SAMPLE_CONTENT ? '<p class="bc-notice">Sample content: placeholder only, not verified competitive intel.</p>' : '') +
      overview(parties) +
      '<section class="bc-block" aria-labelledby="bc-tips-title"><h2 class="bc-section-title" id="bc-tips-title">Quick tips</h2>' +
        comps.map(tipset).join('') + '</section>' +
      table(parties);

    // Animate donut arcs in
    requestAnimationFrame(function(){ requestAnimationFrame(function(){
      card.querySelectorAll('.bc-donut-arc').forEach(function(a){
        a.setAttribute('stroke-dasharray', a.getAttribute('data-len') + ' ' + C);
      });
    }); });
  }

  function sync(){
    fillSelect(0, picked[0] || '', picked[1]);
    var second = showSecond || picked.length > 1;
    slot1.hidden = vs1.hidden = !second;
    if(second) fillSelect(1, picked[1] || '', picked[0]);
    addBtn.hidden = second || picked.length < 1 || BC_DATA.competitors.length < 2 || picked.length >= MAX;

    // Shareable link, e.g. #vs=darwinbox,sprout
    if(history.replaceState) history.replaceState(null, '', picked.length ? '#vs=' + picked.join(',') : location.pathname + location.search);
    render();
  }

  sel[0].addEventListener('change', function(){
    if(sel[0].value) picked[0] = sel[0].value;
    else { picked.shift(); showSecond = false; }
    picked = picked.filter(Boolean);
    sync();
  });
  sel[1].addEventListener('change', function(){
    picked = [picked[0], sel[1].value].filter(Boolean);
    sync();
  });
  addBtn.addEventListener('click', function(){ showSecond = true; sync(); sel[1].focus(); });
  removeBtn.addEventListener('click', function(){ picked = picked.slice(0, 1); showSecond = false; sync(); addBtn.focus(); });

  var m = location.hash.match(/vs=([\w,-]+)/);
  if(m){
    m[1].split(',').forEach(function(id){
      if(byId[id] && picked.indexOf(id) < 0 && picked.length < MAX) picked.push(id);
    });
  }
  sync();
}());
