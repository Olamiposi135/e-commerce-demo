const products = [
  {
    id: 1,
    name: "Bakuchiol Night Elixir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz_AhAfPD-io4ZSPyij1-wxnd0DJhGlOlwY2-m8koG0ycHLK2FchiUR7SyBEjc7uTC4UgSse-k4420RtSh80-mS02rMwTznvoEFIRdan-mrOttwXQQGAWZzXxMjynUZkc5vKLBCQQQxDsSBqae2_rRisN8z0sfVacxgoOUMIKSXZa3w7VCwBEG9s29Ap63f7-fq-duYH25P9lOR0dvMyK4S0O5-NWKVTAknDJJ7UJnz7Oqp2pTU5Z1H5MWIRjdASC8FCTOul8ttOn5",
    description:
      "A plant-based retinol alternative that smooths fine lines and restores elasticity overnight.",
    category: "Serums",
    price: 46.0,
    badge: "20% OFF",
  },
  {
    id: 2,
    name: "Daily Shield SPF 50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBumkcL1R_fZMaZeUpC48q3OL-dkQSe_43RoWKBa36qLQyldgS_r-_7_1JTThl6G1j4n1WeyjYh-JTgoigId3CoNdJ3TXtE-wa3zPc-jmBb6qNlCJ9TnJ3HIeMhVbX-tNpKl9HzxriMtSDVG5Ob3JC5s4K2FbeUC-dI4BefxGsTFNvX_EcqXrZgWW1L_qry9Qae8tdjgBwF70EmgRbrHb4ud5igLckBRJ_tBhsEQP5W2sc6hil_OIvCoVxS9m2_qaQI_udZbfrrNRK1",
    description:
      "Ultralight mineral protection with zero white cast and active antioxidants.",
    category: "Sun Care",
    price: 34.0,
  },
  {
    id: 3,
    name: "AHA Radiance Toner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgkluNFJ4LW755yzGIVfbNTiYLxCxxNrDmJkF7sKgExPaSmb0s4e7TK-2qgSeYiECVNCxSWSZ-mLs4Ao0Abnva8Va3ZX3OYz8K1XVNHLecYG8V5LFIVx0uQP215sIclpSMxd6plcWsyqNDsDwjvrMWy-N8plRoGSoqnLHS_sG8gCEUMbZabEj0UDHAeWGa9gzX49F0zWt495lznRN_UWfoMEJL9CMgKiSuXVJPLPMFL9OUwwqpjDAuqneK0ayy6Sw0pM-T-ljklCEm",
    description:
      "A gentle exfoliating complex that resurfaces skin and minimizes pore appearance.",
    category: "Cleansers",
    price: 28.0,
    badge: "15% OFF",
  },
  {
    id: 4,
    name: "Bio-Cellular Eye Cream",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDccvcdv9Tg9IGABtw_jB5qO5dB9KOoOmsqNu74xhDm2a2hQ4k2HGcuk97si8-vq3YdlCbrwAKK-1tVD1gs17wCpRpQw8pjroeTmXdpxYDeKtAXFwHz19u0fbCHY2Y5TPmq5wRy6FPVSSb-1UvoQeXUIzXZoI6byFfZLrTbDpMBB7KU1llP-KtVg7akm6_5VkDSiWx5vjOWk6N2cGT0RAScyZESPFdHIK73Ir-54cB5Tug4jX6yRWYKsLZ0OnbbISJF_fl2_D8xjCLa",
    description:
      "Advanced peptide formula targeting dark circles and puffiness with cooling effect.",
    category: "Eye Care",
    price: 52.0,
  },
  {
    id: 5,
    name: "Hyper-Active Vitamin C",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz_AhAfPD-io4ZSPyij1-wxnd0DJhGlOlwY2-m8koG0ycHLK2FchiUR7SyBEjc7uTC4UgSse-k4420RtSh80-mS02rMwTznvoEFIRdan-mrOttwXQQGAWZzXxMjynUZkc5vKLBCQQQxDsSBqae2_rRisN8z0sfVacxgoOUMIKSXZa3w7VCwBEG9s29Ap63f7-fq-duYH25P9lOR0dvMyK4S0O5-NWKVTAknDJJ7UJnz7Oqp2pTU5Z1H5MWIRjdASC8FCTOul8ttOn5",
    description: "Brightening & Protective Antioxidant",
    category: "Serums",
    price: 64.0,
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Barrier Reset Cream",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBumkcL1R_fZMaZeUpC48q3OL-dkQSe_43RoWKBa36qLQyldgS_r-_7_1JTThl6G1j4n1WeyjYh-JTgoigId3CoNdJ3TXtE-wa3zPc-jmBb6qNlCJ9TnJ3HIeMhVbX-tNpKl9HzxriMtSDVG5Ob3JC5s4K2FbeUC-dI4BefxGsTFNvX_EcqXrZgWW1L_qry9Qae8tdjgBwF70EmgRbrHb4ud5igLckBRJ_tBhsEQP5W2sc6hil_OIvCoVxS9m2_qaQI_udZbfrrNRK1",
    description: "Deep Hydration & Repair Ritual",
    category: "Moisturizers",
    price: 58.0,
  },
  {
    id: 7,
    name: "Gentle Amino Cleanser",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgkluNFJ4LW755yzGIVfbNTiYLxCxxNrDmJkF7sKgExPaSmb0s4e7TK-2qgSeYiECVNCxSWSZ-mLs4Ao0Abnva8Va3ZX3OYz8K1XVNHLecYG8V5LFIVx0uQP215sIclpSMxd6plcWsyqNDsDwjvrMWy-N8plRoGSoqnLHS_sG8gCEUMbZabEj0UDHAeWGa9gzX49F0zWt495lznRN_UWfoMEJL9CMgKiSuXVJPLPMFL9OUwwqpjDAuqneK0ayy6Sw0pM-T-ljklCEm",
    description: "Ph-Balanced Daily Purifier",
    category: "Cleansers",
    price: 32.0,
  },
  {
    id: 8,
    name: "Hydrating Night Mask",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDccvcdv9Tg9IGABtw_jB5qO5dB9KOoOmsqNu74xhDm2a2hQ4k2HGcuk97si8-vq3YdlCbrwAKK-1tVD1gs17wCpRpQw8pjroeTmXdpxYDeKtAXFwHz19u0fbCHY2Y5TPmq5wRy6FPVSSb-1UvoQeXUIzXZoI6byFfZLrTbDpMBB7KU1llP-KtVg7akm6_5VkDSiWx5vjOWk6N2cGT0RAScyZESPFdHIK73Ir-54cB5Tug4jX6yRWYKsLZ0OnbbISJF_fl2_D8xjCLa",
    description: "Overnight deep hydration with hyaluronic acid complex.",
    category: "Moisturizers",
    price: 48.0,
  },
];

export default products;
