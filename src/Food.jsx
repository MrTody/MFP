function Food() {
  const mtv1 = "Never Give up";
  const mtv2 = "No Risk No Story!";
  const mtv3 = "Trust Your Crazy Idea";

  return (
    <>
      <div class="dwhole">
        <div class="dbox">
          <div>
            <ul class="card">
              <h1>{mtv1}</h1>
              <img src="./NGP.jpg" alt="NGP" />
            </ul>
          </div>
          <div>
            <ul class="card">
              <h1>{mtv2}</h1>
              <img src="./NRNS.jpg" alt="NRNS" />
            </ul>
          </div>
          <div>
            <ul class="card">
              <h1>{mtv3}</h1>
              <img src="./TYCI.jpg" alt="TYCI" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
