const printCharts = (labels, prices) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          label: 'Stock Chart',
          data: prices
        }
      ]
    }
  });
};

const getStockInfo = stockName => {
  axios
    .get(`https://api.iextrading.com/1.0/stock/${stockName}/chart`)
    .then(response => {
      const { data } = response;
      console.log(data);
      const labels = data.map(el => el.label);
      const prices = data.map(el => el.close);

      printCharts(labels, prices);
    })
    .catch(err => {
      console.error(err);
    });
};

getStockInfo('amzn');
