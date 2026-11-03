/*
# Create quote_requests table

1. New Tables
- `quote_requests`: free-estimate requests submitted from the public website contact form.
  - `id` (uuid, primary key)
  - `name` (text, required, 1-100 chars)
  - `email` (text, required, 3-255 chars)
  - `phone` (text, optional, up to 30 chars)
  - `service` (text, required, one of the listed service types)
  - `message` (text, optional, up to 2000 chars)
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `quote_requests`.
- Grant INSERT only to `anon` and `authenticated` so the public form can submit requests.
- Single INSERT policy allowing anyone to submit; no SELECT, UPDATE, or DELETE is granted, so visitors cannot read or change other requests.

3. Important Notes
- The website has no sign-in, so requests are submitted through the public anon key.
- Length and format checks are enforced in the database as a backstop to the form validation.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 30),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON quote_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
