-- ============================================================
-- Talevi Landing Page — Schema Inicial
-- ============================================================

-- Leads capturados (se houver etapa de opt-in)
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    name TEXT,
    phone TEXT,
    source TEXT DEFAULT 'landing_page',
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert from public" ON leads
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for authenticated admin" ON leads
    FOR SELECT USING (auth.role() = 'authenticated');

-- Eventos de funil (view, scroll, clique CTA, checkout iniciado, venda)
CREATE TABLE page_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type TEXT NOT NULL, -- 'page_view', 'scroll_depth', 'cta_click', 'checkout_init', 'purchase_confirmed'
    session_id TEXT,
    page_path TEXT DEFAULT '/',
    variant TEXT DEFAULT 'control', -- A/B test variant
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE page_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert from public" ON page_events
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow select for authenticated admin" ON page_events
    FOR SELECT USING (auth.role() = 'authenticated');

-- A/B test variants
CREATE TABLE ab_test_variants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    test_name TEXT NOT NULL,
    variant_name TEXT NOT NULL,
    traffic_percentage INTEGER CHECK (traffic_percentage BETWEEN 0 AND 100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE ab_test_variants ENABLE ROW LEVEL SECURITY;

-- Checkout events (rastreamento de abandono)
CREATE TABLE checkout_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT,
    event_type TEXT NOT NULL, -- 'initiated', 'abandoned', 'completed'
    product_id TEXT,
    amount DECIMAL(10,2),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE checkout_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert from public" ON checkout_events
    FOR INSERT WITH CHECK (true);

-- WhatsApp remarketing queue
CREATE TABLE whatsapp_remarketing (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES leads(id),
    phone TEXT NOT NULL,
    status TEXT DEFAULT 'pending', -- 'pending', 'sent', 'failed', 'opted_out'
    message_template TEXT,
    scheduled_at TIMESTAMPTZ,
    sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE whatsapp_remarketing ENABLE ROW LEVEL SECURITY;

-- Índices para performance
CREATE INDEX idx_page_events_session ON page_events(session_id);
CREATE INDEX idx_page_events_type ON page_events(event_type);
CREATE INDEX idx_page_events_created ON page_events(created_at);
CREATE INDEX idx_checkout_events_session ON checkout_events(session_id);
CREATE INDEX idx_checkout_events_status ON checkout_events(event_type);
