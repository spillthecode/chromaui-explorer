import React from 'react';
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Check,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeColors } from '../../types';
import { SiteNav, SiteSection } from './websiteShared';

export interface BusinessSiteProps {
  color: string;
  contrastColor: string;
  theme: ThemeColors;
  isDarkMode: boolean;
}

export const AgencyBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
    <SiteNav
      brand={<span style={{ color }}>APEX</span>}
      color={color}
      contrastColor={contrastColor}
      theme={theme}
      productsOrServices="Services"
      cta={{ label: 'Start a project' }}
    />

    <SiteSection id="home" title="We shape brands people remember." color={color} theme={theme} eyebrow="Home">
      <p className={cn('text-sm font-semibold', theme.textMuted)}>Creative agency · Est. 2014</p>
      <p className={cn('text-sm md:text-base leading-relaxed max-w-xl', theme.textMuted)}>
        Strategy, identity, and digital products for teams who care about craft.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl shadow-lg"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          View selected work
          <ArrowRight size={16} />
        </button>
        <button
          type="button"
          className={cn('text-sm font-bold px-5 py-3 rounded-xl border', theme.border, theme.textMuted)}
        >
          Download deck
        </button>
      </div>
    </SiteSection>

    <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="Our studio">
      <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
        Apex is a multidisciplinary studio in London and Berlin. We partner with founders and marketing leads who
        want design that feels inevitable — not decorative.
      </p>
      <div className="grid sm:grid-cols-3 gap-3 pt-2">
        {['Research-led', 'Design systems', 'Launch support'].map((t) => (
          <div key={t} className={cn('p-4 rounded-xl border text-sm font-medium', theme.border, theme.text)}>
            {t}
          </div>
        ))}
      </div>
    </SiteSection>

    <SiteSection id="services" title="Services" color={color} theme={theme} eyebrow="What we deliver">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { t: 'Brand & narrative', d: 'Positioning, voice, and visual identity programmes.' },
          { t: 'Product design', d: 'Web and app UX from discovery to high-fidelity UI.' },
          { t: 'Campaign art direction', d: 'Photography, motion, and rollout toolkits.' },
          { t: 'Design ops', d: 'Tokens, components, and documentation your devs will use.' }
        ].map((s) => (
          <div
            key={s.t}
            className={cn('p-5 rounded-2xl border', theme.border, isDarkMode ? 'bg-white/[0.03]' : 'bg-white shadow-sm')}
          >
            <h3 className={cn('font-bold text-sm mb-2', theme.text)}>{s.t}</h3>
            <p className={cn('text-xs leading-relaxed', theme.textMuted)}>{s.d}</p>
          </div>
        ))}
      </div>
    </SiteSection>

    <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Let’s talk">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className={cn('space-y-3 text-sm', theme.textMuted)}>
          <p className="flex items-center gap-2">
            <Mail size={16} style={{ color }} />
            hello@apexcreative.studio
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} style={{ color }} />
            Shoreditch, London
          </p>
        </div>
        <form className={cn('flex-1 grid gap-2 max-w-sm', theme.textMuted)} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Work email"
            className={cn(
              'w-full px-3 py-2 rounded-lg border text-sm bg-transparent',
              theme.border,
              theme.text
            )}
            readOnly
          />
          <button
            type="button"
            className="text-sm font-bold py-2.5 rounded-lg w-full sm:w-auto px-6"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            Book intro call
          </button>
        </form>
      </div>
    </SiteSection>
  </div>
);

export const SaasBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
    <SiteNav
      brand={<span style={{ color }}>Northline</span>}
      color={color}
      contrastColor={contrastColor}
      theme={theme}
      productsOrServices="Products"
      cta={{ label: 'Start trial' }}
    />

    <SiteSection id="home" title="Run operations without the spreadsheet chaos." color={color} theme={theme} eyebrow="Home">
      <div
        className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full mb-2 border w-fit"
        style={{ borderColor: color, color }}
      >
        <Sparkles size={14} />
        New: AI-assisted workflows
      </div>
      <p className={cn('text-sm md:text-base max-w-xl', theme.textMuted)}>
        Northline brings approvals, vendors, and budgets into one calm workspace.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          className="text-sm font-bold px-5 py-3 rounded-xl"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          Start free trial
        </button>
        <button type="button" className={cn('text-sm font-bold px-5 py-3', theme.textMuted)}>
          Talk to sales →
        </button>
      </div>
    </SiteSection>

    <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="Why we exist">
      <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
        We built Northline after watching finance and ops teams juggle fifteen tabs. Our mission is simple: one source
        of truth for how money and work move through your company — with audit trails that make auditors smile.
      </p>
      <p className={cn('text-sm font-semibold', theme.text)}>Backed by operators from Stripe, Notion, and Ramp.</p>
    </SiteSection>

    <SiteSection id="products" title="Products" color={color} theme={theme} eyebrow="The platform">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['Approvals', 'Reporting', 'Integrations'].map((title) => (
          <div
            key={title}
            className={cn('p-5 rounded-2xl border', theme.border, isDarkMode ? 'bg-white/[0.03]' : 'bg-white shadow-sm')}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${color}22`, color }}
            >
              <Briefcase size={20} />
            </div>
            <h3 className={cn('font-bold text-sm mb-1', theme.text)}>{title}</h3>
            <p className={cn('text-xs leading-relaxed', theme.textMuted)}>
              Ship faster with templates your team actually uses.
            </p>
          </div>
        ))}
      </div>
    </SiteSection>

    <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Sales & support">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className={cn('space-y-2 text-sm', theme.textMuted)}>
          <p className="flex items-center gap-2">
            <Mail size={16} style={{ color }} />
            sales@northline.app
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} style={{ color }} />
            +1 (415) 555-0192
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-bold px-5 py-3 rounded-xl border w-fit h-fit"
          style={{ borderColor: color, color }}
        >
          Book a demo
        </button>
      </div>
    </SiteSection>
  </div>
);

export const RestaurantBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div>
    <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
      <SiteNav
        brand={<span className={cn('font-serif italic', theme.text)}>Harbor & Hearth</span>}
        color={color}
        contrastColor={contrastColor}
        theme={theme}
        productsOrServices="Services"
        cta={{ label: 'Reserve', variant: 'solid' }}
      />
    </div>

    <section id="home" className={cn('border-t', theme.borderLight)}>
      <div className="grid md:grid-cols-2 gap-0">
        <div
          className={cn(
            'min-h-[200px] md:min-h-[260px] flex items-end p-8 md:p-10 relative overflow-hidden',
            isDarkMode ? 'bg-slate-900' : 'bg-slate-200'
          )}
        >
          <div className="absolute inset-0 opacity-40" style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 70%)` }} />
          <UtensilsCrossed className="absolute right-8 top-8 w-20 h-20 opacity-20" style={{ color }} />
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color }}>
              Home
            </p>
            <p className={cn('text-2xl font-serif italic', theme.text)}>Seasonal plates, local wine.</p>
          </div>
        </div>
        <div className={cn('p-8 md:p-10 flex flex-col justify-center', isDarkMode ? 'bg-slate-950' : 'bg-white')}>
          <p className={cn('text-sm leading-relaxed', theme.textMuted)}>
            Waterfront dining with a menu that changes with the catch. We’re open Tuesday–Sunday, 5pm–late.
          </p>
        </div>
      </div>
    </section>

    <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12 space-y-0">
      <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="Our kitchen">
        <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
          Chef Maria Alvarez opened Harbor & Hearth in 2019 after a decade in Copenhagen and Lyon. We source from
          growers within 150 miles — and say no to anything that doesn’t meet the moment.
        </p>
      </SiteSection>

      <SiteSection id="services" title="Services" color={color} theme={theme} eyebrow="What we offer">
        <div className="space-y-3 mb-4">
          {['Tasting menu', 'Chef’s counter', 'Private dining'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: color, color: contrastColor }}
              >
                <Check size={12} strokeWidth={3} />
              </span>
              <span className={theme.text}>{item}</span>
            </div>
          ))}
        </div>
        <p className={cn('text-xs', theme.textMuted)}>Tue–Sun · 5pm–11pm · Downtown waterfront</p>
      </SiteSection>

      <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Visit & book">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-xl w-fit"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            <Calendar size={18} />
            Book on OpenTable
          </button>
          <p className={cn('flex items-center gap-2 text-sm', theme.textMuted)}>
            <MapPin size={16} style={{ color }} />
            22 Wharf Street, San Francisco
          </p>
          <p className={cn('flex items-center gap-2 text-sm', theme.textMuted)}>
            <Phone size={16} style={{ color }} />
            (415) 555-0147
          </p>
        </div>
      </SiteSection>
    </div>
  </div>
);

export const LegalBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12 border-l-4" style={{ borderColor: color }}>
    <SiteNav
      brand={
        <span className="flex items-center gap-2">
          <span
            className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: color, color: contrastColor }}
          >
            MH
          </span>
          <span className={cn('font-serif text-sm font-medium', theme.text)}>Morrison Hale</span>
        </span>
      }
      color={color}
      contrastColor={contrastColor}
      theme={theme}
      productsOrServices="Services"
      cta={{ label: 'Schedule', variant: 'outline' }}
    />

    <SiteSection id="home" title="Counsel that keeps pace with your growth." color={color} theme={theme} eyebrow="Home">
      <p className={cn('text-sm', theme.textMuted)}>Business law · M&A · Employment</p>
      <p className={cn('text-sm md:text-base leading-relaxed max-w-2xl mt-3', theme.textMuted)}>
        Practical advice for founders and leadership teams—clear timelines, fixed-fee options where it helps.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <button
          type="button"
          className="text-sm font-bold px-6 py-3 border-2 rounded-sm"
          style={{ borderColor: color, color }}
        >
          Schedule a consult
        </button>
        <button type="button" className={cn('text-sm font-bold px-6 py-3 rounded-sm border-2 border-transparent', theme.textMuted)}>
          Download credentials
        </button>
      </div>
    </SiteSection>

    <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="The firm">
      <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
        Morrison Hale LLP advises growth-stage companies and private equity sponsors. We staff lean teams with senior
        partners — so you never pay to train junior associates on your dime.
      </p>
    </SiteSection>

    <SiteSection id="services" title="Services" color={color} theme={theme} eyebrow="Practice areas">
      <ul className={cn('space-y-2 text-sm list-disc pl-5', theme.textMuted)} style={{ listStyleColor: color }}>
        <li className={theme.text}>Corporate & M&A</li>
        <li className={theme.text}>Employment & executive compensation</li>
        <li className={theme.text}>Commercial contracts & IP licensing</li>
        <li className={theme.text}>Regulatory readiness</li>
      </ul>
    </SiteSection>

    <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Offices">
      <div className={cn('grid sm:grid-cols-2 gap-4 text-sm', theme.textMuted)}>
        <p className="flex items-start gap-2">
          <MapPin size={16} className="shrink-0 mt-0.5" style={{ color }} />
          <span>350 Mission Street, Suite 1200, San Francisco, CA</span>
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} style={{ color }} />
          (415) 555-0199
        </p>
        <p className="flex items-center gap-2 sm:col-span-2">
          <Mail size={16} style={{ color }} />
          intake@morrisonhale.com
        </p>
      </div>
    </SiteSection>
  </div>
);

export const FitnessBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
    <SiteNav
      brand={
        <span className={cn('text-lg font-black uppercase tracking-tighter', theme.text)}>
          Forge<span style={{ color }}>Lab</span>
        </span>
      }
      color={color}
      contrastColor={contrastColor}
      theme={theme}
      productsOrServices="Services"
      cta={{ label: 'Free pass' }}
    />

    <SiteSection id="home" title="Train with intent. Recover with purpose." color={color} theme={theme} eyebrow="Home">
      <p className={cn('text-sm font-semibold mb-4', theme.textMuted)}>Strength · Conditioning · Community</p>
      <div className="flex flex-wrap gap-8 mb-4">
        {[
          { k: 'Classes', v: '48 / wk' },
          { k: 'Coaches', v: '12' },
          { k: 'Members', v: '2.4k' }
        ].map(({ k, v }) => (
          <div key={k}>
            <p className="text-2xl font-black tabular-nums" style={{ color }}>
              {v}
            </p>
            <p className={cn('text-xs font-bold uppercase tracking-wider', theme.textMuted)}>{k}</p>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border',
          theme.border,
          isDarkMode ? 'bg-white/[0.04]' : 'bg-white shadow-md'
        )}
      >
        <div>
          <p className={cn('font-bold text-base mb-1', theme.text)}>7-day guest pass</p>
          <p className={cn('text-sm', theme.textMuted)}>Unlimited floor access + one intro session.</p>
        </div>
        <button
          type="button"
          className="shrink-0 text-sm font-black uppercase tracking-wide px-8 py-4 rounded-xl"
          style={{ backgroundColor: color, color: contrastColor }}
        >
          Claim pass
        </button>
      </div>
    </SiteSection>

    <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="Our gym">
      <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
        ForgeLab is a coach-led gym — not a room of screens. We program strength blocks, metabolic finishers, and
        mobility work so you leave stronger every week, not just tired.
      </p>
    </SiteSection>

    <SiteSection id="services" title="Services" color={color} theme={theme} eyebrow="Memberships & classes">
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { n: 'Unlimited', p: 'All classes + open gym' },
          { n: 'Athlete', p: 'Small-group coaching 3×/week' },
          { n: 'Foundations', p: 'On-ramp for first-time lifters' },
          { n: 'Recovery', p: 'Sauna, cold plunge, mobility lab' }
        ].map((x) => (
          <div key={x.n} className={cn('p-4 rounded-xl border text-sm', theme.border)}>
            <p className={cn('font-bold', theme.text)}>{x.n}</p>
            <p className={cn('text-xs mt-1', theme.textMuted)}>{x.p}</p>
          </div>
        ))}
      </div>
    </SiteSection>

    <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Find us">
      <div className={cn('flex flex-col gap-2 text-sm', theme.textMuted)}>
        <p className="flex items-center gap-2">
          <MapPin size={16} style={{ color }} />
          901 Market St, San Francisco
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} style={{ color }} />
          (415) 555-0178
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} style={{ color }} />
          frontdesk@forgelab.fit
        </p>
      </div>
    </SiteSection>
  </div>
);

export const RetailBusinessSite: React.FC<BusinessSiteProps> = ({
  color,
  contrastColor,
  theme,
  isDarkMode
}) => (
  <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
    <SiteNav
      brand={<span style={{ color }}>Lumen Supply Co.</span>}
      color={color}
      contrastColor={contrastColor}
      theme={theme}
      productsOrServices="Products"
      cta={{ label: 'Shop', variant: 'outline' }}
    />

    <SiteSection id="home" title="Everyday goods, elevated." color={color} theme={theme} eyebrow="Home">
      <p className={cn('text-sm max-w-xl', theme.textMuted)}>
        Independent design shop for thoughtful objects — ceramics, textiles, and small-batch home goods.
      </p>
      <button
        type="button"
        className="text-sm font-bold px-5 py-2.5 rounded-full border-2 w-fit mt-4"
        style={{ borderColor: color, color }}
      >
        Shop new arrivals
      </button>
    </SiteSection>

    <SiteSection id="about" title="About Us" color={color} theme={theme} eyebrow="Our story">
      <p className={cn('text-sm leading-relaxed max-w-2xl', theme.textMuted)}>
        Lumen started as a weekend pop-up in 2017. Today we partner with makers across Japan, Portugal, and the US
        Pacific Northwest — always prioritising materials you can trace and pieces you’ll keep for years.
      </p>
    </SiteSection>

    <SiteSection id="products" title="Products" color={color} theme={theme} eyebrow="Featured">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['Ceramic mug', 'Wool throw', 'Desk lamp', 'Travel bottle', 'Canvas tote', 'Scented candle'].map((name, i) => (
          <div
            key={name}
            className={cn(
              'rounded-2xl border overflow-hidden group',
              theme.border,
              isDarkMode ? 'bg-white/[0.03]' : 'bg-white'
            )}
          >
            <div
              className={cn(
                'aspect-[4/3] flex items-center justify-center relative',
                isDarkMode ? 'bg-slate-900' : 'bg-slate-100'
              )}
            >
              {i === 0 && (
                <span
                  className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: color, color: contrastColor }}
                >
                  Sale
                </span>
              )}
              <ShoppingBag size={32} className="opacity-25" style={{ color }} />
            </div>
            <div className="p-3">
              <p className={cn('text-xs font-bold truncate', theme.text)}>{name}</p>
              <p className="text-xs font-semibold mt-1" style={{ color }}>
                ${(29 + i * 7).toFixed(0)}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </SiteSection>

    <SiteSection id="contact" title="Contact Us" color={color} theme={theme} eyebrow="Store & support">
      <div className={cn('grid sm:grid-cols-2 gap-4 text-sm', theme.textMuted)}>
        <p className="flex items-start gap-2">
          <MapPin size={16} className="shrink-0 mt-0.5" style={{ color }} />
          <span>Retail: 428 Hayes St, San Francisco · Daily 10–7</span>
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} style={{ color }} />
          hello@lumensupply.co
        </p>
        <p className="flex items-center gap-2 sm:col-span-2">
          <Phone size={16} style={{ color }} />
          (415) 555-0163
        </p>
      </div>
    </SiteSection>
  </div>
);
