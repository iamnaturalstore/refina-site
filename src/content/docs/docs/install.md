---
title: Install & Embed
description: Add Refina to your Shopify theme and verify the concierge.
---
1. **Install** the app from the Shopify App Store.
2. In **Theme → App embeds**, enable **Refina Concierge**.
3. Open your storefront and confirm the concierge answers a test query.
EOF

# Settings
cat > src/content/docs/docs/settings.md << 'EOF'
---
title: Settings
description: Configure category, styling, and analytics.
---
- **Category**: set your store’s vertical (e.g., Beauty, Fishing Gear). Tunes the concierge prompt.
- **Styling** (Premium): theme tokens for the widget.
- **Analytics**: see trending concerns and matched products.

> Save changes, then refresh your storefront.
EOF

# Troubleshooting
cat > src/content/docs/docs/troubleshooting.md << 'EOF'
---
title: Troubleshooting
description: Quick fixes for common issues.
---
**Concierge won’t open?**  
Theme → App embeds → enable **Refina**.

**No AI responses?**  
Confirm plan is **Premium** and Firebase keys are valid.

**Images 404/redirect?**  
Ensure product image URLs are direct CDN links.
