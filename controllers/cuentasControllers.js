import { cuentasData } from "../data/cuentasData.js";

export const getCuentas = (req, res) => {
  res.json({
    count: cuentasData.length,
    data: cuentasData,
  });
};

export const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentasData.find((c) => c.id === id);

  res.json({
    finded: !!cuenta,
    account: cuenta || null,
  });
};


export const getCuentaByQuery = (req, res) => {
  const { queryParam } = req.query;

  if (!queryParam) {
    return res.json({
      finded: false,
      message: "Debe enviar un queryParam",
    });
  }

  const lowerQuery = queryParam.toLowerCase();

  const results = cuentasData.filter((c) => {
    return (
      (c.id && c.id === queryParam) ||
      (c.nameBook && c.nameBook.toLowerCase().includes(lowerQuery)) ||
      (c.gender && c.gender.toLowerCase() === lowerQuery)
    );
  });

  if (results.length === 1) {
    res.json({ finded: true, account: results[0] });
  } else if (results.length > 1) {
    res.json({ finded: true, data: results });
  } else {
    res.json({ finded: false });
  }
};


export const getCuentasBalance = (req, res) => {
  // 
  const activas = cuentasData.filter((c) => c.isActive);

  // Usamos 0 si el campo no existe
  const total = activas.reduce(
    (sum, c) => sum + (Number(c.balance) || 0),
    0
  );

  res.json({
    status: activas.length > 0,
    accountBalance: total,
  });
};
