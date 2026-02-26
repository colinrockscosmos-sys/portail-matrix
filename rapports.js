const reports = [
  {
    url: "https://docs.google.com/document/d/1a6BDw6dZT2CnsNJGuzSP9h9mcLigDqOMov47nZx7nrc/preview",
    date: "19/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1CCj4ZKyqtx636LZRkHMa8Ykqn1jqjyUxdCXG9T3mefI/preview",
    date: "18/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/18RvTBojEPdM5460V5iEr9HKkduJXUyzmzHDaR3cJShg/preview",
    date: "16/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1QiF4_8gsd9Xk0hbC_CTTvAE6oBxSYhlbiKBzVYi8hDw/preview",
    date: "17/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1WcUG8ztbmljzflNmgnJYnsXiImFoRlK9kld17fIDSXk/preview",
    date: "15/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1CRzMohJXtniJGGDbTL-hHRAe51NCKLu2POKRyy-nfqE/preview",
    date: "13/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1UtZNm-EE-yBJK4QxK2QV398RRWSoRQW7KEhmrohGa6c/preview",
    date: "10/02/2026"
  },
  {
    url: "https://docs.google.com/document/d/1u6IJoZvK2-ZRhs4KDx4yE3y1gOfcRyCPGqZVLA11UOc/preview",
    date: "08/02/2026"
  }
];

// 🔥 TRI automatique du plus récent au plus ancien
reports.sort((a, b) => {
  const dateA = new Date(a.date.split('/').reverse().join('-'));
  const dateB = new Date(b.date.split('/').reverse().join('-'));
  return dateB - dateA;
});

const container = document.getElementById("reportsContainer");

reports.forEach(report => {
  const reportCard = document.createElement("div");
  reportCard.className = "report-card";

  reportCard.innerHTML = `
    <iframe src="${report.url}" loading="lazy"></iframe>
    <p>Rapport du ${report.date}</p>
  `;

  reportCard.onclick = () => {
    window.open(report.url.replace("/preview", "/edit"), "_blank");
  };

  container.appendChild(reportCard);
});