async function httpxPut(url, data) {
  try {
    let res = await fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Unable to complete request",
    };
  }
}

async function httpxPost(url, data) {
  try {
    let res = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: "Unable to complete request",
    };
  }
}
 