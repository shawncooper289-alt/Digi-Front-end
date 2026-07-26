# DigiMark101 Client Setup - $15,000 Account

## ⚠️ DO NOT MODIFY WITHOUT BACKUP

This document protects your existing client setup.

### Current Client Configuration:
- **Client ID**: `digi-marketing` (or your ID)
- **Backend**: Supabase
- **AI Engine**: Ava Knowledge Base + Ava OS
- **Status**: ✅ ACTIVE & WORKING

### What's Protected:
1. ✅ All existing campaigns & data
2. ✅ User accounts & permissions
3. ✅ Social media integrations
4. ✅ Email marketing sequences
5. ✅ Analytics & reporting
6. ✅ API configurations
7. ✅ Billing information

### Update Safety Protocol:

**BEFORE any deployment:**
```bash
# 1. Create backup
git branch backup-$(date +%Y-%m-%d)
git push origin backup-$(date +%Y-%m-%d)

# 2. Test on staging
npm run test:existing

# 3. Verify client data intact
echo "Testing $NEXT_PUBLIC_CLIENT_ID"

# 4. Check API endpoints
curl "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/" -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY"

# 5. Only then deploy
git push origin main
```

### Rollback Instructions:
```bash
# If ANYTHING goes wrong
git checkout backup-2026-06-01  # Use your backup date
git push --force origin main
# Done - client unaffected, reverted in < 1 minute
```

### Critical Environment Variables:
```env
# These MUST NOT CHANGE
NEXT_PUBLIC_CLIENT_ID=digi-marketing
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
```

### Post-Deployment Verification:
1. [ ] Client can log in
2. [ ] Dashboard loads
3. [ ] Campaigns visible
4. [ ] Social media posts working
5. [ ] Email campaigns sending
6. [ ] Analytics displaying
7. [ ] No error messages

**If ANY of these fail → IMMEDIATE ROLLBACK**

---

## Your Improvements (No Risk):

✅ Better looking landing page (Dynasty theme)
✅ Faster page loads
✅ Smoother animations
✅ Better mobile support
✅ More stable errors
✅ Easier to manage
✅ Better monitoring

✅ **All without touching anything the client uses**

---

**Deployment Date**: ___________
**Approved By**: ___________
**Backup Location**: ___________
**Rollback Time (if needed)**: < 1 minute
