
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ORVEX BRIDGE Supabase Configuration

const SUPABASE_URL = "https://xbsbhkraqfzwflhgvbzp.supabase.co";

// Paste your Supabase PUBLISHABLE KEY between the quotes below.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_zmssX5bLhG5sgGynDCkLDw_mNV3xpc9";

// Create Supabase connection
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
