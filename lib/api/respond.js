export function ok(res, data, status = 200) {
  res.status(status).json({ ok: true, ...data });
}

export function fail(res, status, message, details = undefined) {
  res.status(status).json({ ok: false, error: message, details });
}

export function allowMethods(req, res, methods) {
  if (methods.includes(req.method)) {
    return true;
  }

  res.setHeader('Allow', methods.join(', '));
  fail(res, 405, `Method ${req.method} is not allowed.`);
  return false;
}
