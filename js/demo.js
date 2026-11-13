// Demo page behaviour.

/* ==========================================================================
   Battle cards — DATA
   Edit this block to update content. Everything below it renders from here.

   Cell values: 'yes' | 'partial' | 'no' | any text.
   Add a note with an object: { v: 'partial', note: 'Via partner' }
   Set SAMPLE_CONTENT to false once real battle card content is in.
   ========================================================================== */
var BC_DATA = {
  SAMPLE_CONTENT: true,

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
    time: 'yes', perf: 'yes', recruit: 'yes',
    ai: { v: 'yes', note: 'Agentic HR assistant included' }, deploy: 'Cloud or on-premise', api: 'yes',
    pricing: 'Per employee / month, modular', impl: '8–12 weeks', support: { v: 'yes', note: 'Teams across Asia' }
  },

  competitors: [
    {
      id: 'darwinbox', name: 'Darwinbox', meta: 'India · Enterprise HCM',
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
      id: 'sunfish', name: 'Sunfish', meta: 'Indonesia · HRIS & payroll',
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
      id: 'sprout', name: 'Sprout Solutions', meta: 'Philippines · SME HR & payroll',
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
      id: 'zoho', name: 'Zoho People', meta: 'Global · SME HR suite',
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
  var sel0 = document.getElementById('bc-select-0');
  var sel1 = document.getElementById('bc-select-1');
  var slot1 = document.getElementById('bc-slot-1');
  var vs1 = document.getElementById('bc-vs-1');
  var addBtn = document.getElementById('bc-add');
  var removeBtn = document.getElementById('bc-remove-1');
  var card = document.getElementById('bc-card');
  var byId = {};
  BC_DATA.competitors.forEach(function(c){ byId[c.id] = c; });

  var picked = [];   // competitor ids, max 2
  var showSecond = false;

  function esc(s){
    return String(s).replace(/[&<>"']/g, function(ch){
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch];
    });
  }

  function fillSelect(el, current, exclude){
    var html = '<option value="">Select competitor</option>';
    BC_DATA.competitors.forEach(function(c){
      if(c.id === exclude) return;
      html += '<option value="' + c.id + '"' + (c.id === current ? ' selected' : '') + '>' + esc(c.name) + '</option>';
    });
    el.innerHTML = html;
    el.classList.toggle('is-empty', !current);
  }

  function cell(val){
    if(val == null) return '<span class="bc-val is-pending">—</span>';
    var v = typeof val === 'object' ? val.v : val;
    var note = typeof val === 'object' && val.note ? '<span class="bc-note">' + esc(val.note) + '</span>' : '';
    var map = { yes: ['is-yes', '✓ Yes'], partial: ['is-partial', '◐ Partial'], no: ['is-no', '✕ No'] };
    var m = map[v] || ['is-text', esc(v)];
    return '<span class="bc-val ' + m[0] + '">' + m[1] + '</span>' + note;
  }

  function list(items){
    if(!items || !items.length) return '<p class="bc-empty">Not added yet.</p>';
    return '<ul>' + items.map(function(i){ return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  function quickCard(c){
    var obj = (c.objections || []).map(function(o){
      return '<dl class="bc-objection"><dt>' + esc(o.q) + '</dt><dd>' + esc(o.a) + '</dd></dl>';
    }).join('') || '<p class="bc-empty">Not added yet.</p>';
    return '<article class="bc-qcard">' +
      '<h2>vs ' + esc(c.name) + '</h2>' +
      '<p class="bc-qmeta">' + esc(c.meta || '') + '</p>' +
      '<p>' + esc(c.positioning || '') + '</p>' +
      '<h3 class="is-win">Where we win</h3>' + list(c.win) +
      '<h3 class="is-risk">Watch out for</h3>' + list(c.risk) +
      '<h3>Objection handling</h3>' + obj +
    '</article>';
  }

  function render(){
    var comps = picked.map(function(id){ return byId[id]; });
    page.classList.toggle('has-card', comps.length > 0);
    card.hidden = comps.length === 0;
    if(!comps.length){ card.innerHTML = ''; return; }

    var head = '<tr><th scope="col">Capability</th><th scope="col" class="is-phr">PeoplesHR</th>' +
      comps.map(function(c){ return '<th scope="col">' + esc(c.name) + '</th>'; }).join('') + '</tr>';

    var body = BC_DATA.categories.map(function(cat){
      var rows = '<tr class="bc-cat"><th colspan="' + (comps.length + 2) + '" scope="colgroup">' + esc(cat.label) + '</th></tr>';
      cat.rows.forEach(function(r){
        rows += '<tr><th scope="row">' + esc(r[1]) + '</th><td class="is-phr">' + cell(BC_DATA.peopleshr[r[0]]) + '</td>' +
          comps.map(function(c){ return '<td>' + cell(c.values[r[0]]) + '</td>'; }).join('') + '</tr>';
      });
      return rows;
    }).join('');

    card.innerHTML =
      (BC_DATA.SAMPLE_CONTENT ? '<p class="bc-notice">Sample content: placeholder only, not verified competitive intel.</p>' : '') +
      '<div class="bc-quick">' + comps.map(quickCard).join('') + '</div>' +
      '<h2 class="bc-section-title">Feature comparison</h2>' +
      '<div class="bc-table-wrap"><table class="bc-table"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>';
  }

  function sync(){
    fillSelect(sel0, picked[0] || '', picked[1]);
    var second = showSecond || picked.length > 1;
    slot1.hidden = vs1.hidden = !second;
    if(second) fillSelect(sel1, picked[1] || '', picked[0]);
    addBtn.hidden = second || picked.length < 1 || BC_DATA.competitors.length < 2 || picked.length >= MAX;

    // Shareable link, e.g. #vs=darwinbox,sprout
    var hash = picked.length ? '#vs=' + picked.join(',') : ' ';
    if(history.replaceState) history.replaceState(null, '', hash === ' ' ? location.pathname + location.search : hash);

    render();
  }

  sel0.addEventListener('change', function(){
    if(sel0.value) picked[0] = sel0.value;
    else { picked.shift(); showSecond = false; }  // cleared first: second moves up
    picked = picked.filter(Boolean);
    sync();
  });

  sel1.addEventListener('change', function(){
    picked = [picked[0], sel1.value].filter(Boolean);
    sync();
  });

  addBtn.addEventListener('click', function(){
    showSecond = true;
    sync();
    sel1.focus();
  });

  removeBtn.addEventListener('click', function(){
    picked = picked.slice(0, 1);
    showSecond = false;
    sync();
    addBtn.focus();
  });

  // Restore from link
  var m = location.hash.match(/vs=([\w,-]+)/);
  if(m){
    m[1].split(',').forEach(function(id){
      if(byId[id] && picked.indexOf(id) < 0 && picked.length < MAX) picked.push(id);
    });
  }
  sync();
}());
