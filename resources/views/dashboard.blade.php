<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

 <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WR2N34H"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
  

    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-WR2N34H");
    </script>

    <section id="ots_tools_hash" class="ots" style="background-color: #f4f4f4">
      <div class="container">
        <h1>Opentimestamps</h1>
        <div class="row col-lg-8 col-lg-offset-2">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12 col-md-12 padding">
                <div class="form-group">
                  <label for="hash-filename">Data file</label>
                  <input
                    type="file"
                    id="hash-filename"
                    class="form-control"
                    accept="*"
                    placeholder="datafile.ext"
                  />
                </div>
                <div class="form-group">
                  <label for="hash-hashType">Hash function</label>
                  <select id="hash-hashType" class="form-control">
                    <option value="SHA1">SHA1</option>
                    <option value="SHA256" selected>SHA256</option>
                    <option value="RIPEMD160">RIPEMD160</option>
                  </select>
                </div>
                <br />
                <div class="col-lg-12 text-center">
                  <button class="btn btn-primary" id="btn-hash">
                    HASH THE DATA FILE
                  </button>
                </div>
                <br />
                <div class="form-group">
                  <label for="hash-output">Hash value</label>
                  <textarea
                    type="text"
                    id="hash-output"
                    name="hash"
                    class="form-control"
                    placeholder="Result will be displayed here"
                    rows="1"
                    cols="64"
                  ></textarea
                  ><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="ots_tools_timestamp" class="ots">
      <div class="container">
        <div class="row col-lg-8 col-lg-offset-2">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 padding">
                <div class="form-group">
                  <label for="stamp-hashValue">Hash value</label>
                  <textarea
                    type="text"
                    id="stamp-hashValue"
                    name="stamp-hashValue"
                    class="form-control"
                    placeholder="Paste input here"
                    rows="1"
                    cols="64"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="stamp-hashType"
                    >Hash function used for the hash above</label
                  >
                  <select
                    id="stamp-hashType"
                    name="stamp-hashType"
                    class="form-control"
                  >
                    <option value="SHA1">SHA1</option>
                    <option value="SHA256" selected>SHA256</option>
                    <option value="RIPEMD160">RIPEMD160</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="stamp-filename">OTS receipt filename</label>
                  <textarea
                    type="text"
                    id="stamp-filename"
                    name="stamp-filename"
                    class="form-control"
                    rows="1"
                    cols="64"
                  >
datafile.ext.ots</textarea
                  >
                </div>
                <div class="form-group">
                  <label for="stamp-filename">OTS Calendar selection</label
                  ><br />
               
                  <input
                    type="checkbox"
                    id="stamp-calendar"
                    name="stamp-calendar"
                    value="https://alice.btc.calendar.opentimestamps.org"
                  />
                  <a href="https://alice.btc.calendar.opentimestamps.org"
                    >Alice (Opentimestamps)</a
                  ><br />
                  <input
                    type="checkbox"
                    id="stamp-calendar"
                    name="stamp-calendar"
                    value="https://bob.btc.calendar.opentimestamps.org"
                  />
                  <a href="https://bob.btc.calendar.opentimestamps.org"
                    >Bob (Opentimestamps)</a
                  ><br />
                  <input
                    type="checkbox"
                    id="stamp-calendar"
                    name="stamp-calendar"
                    value="https://finney.calendar.eternitywall.com"
                  />
                  <a href="https://finney.calendar.eternitywall.com"
                    >Finney (Eternitywall)</a
                  ><br />
                </div>
                <br />
                <div class="col-lg-12 text-center">
                  <button class="btn btn-primary" id="btn-stamp">
                    SUBMIT HASH
                  </button>
                </div>
                <br />
                <div class="form-group">
                  <label for="stamp-output">OTS receipt</label>
                  <textarea
                    type="text"
                    id="stamp-output"
                    name="stamp-output"
                    class="form-control"
                    placeholder="Result will be displayed here"
                    rows="8"
                    cols="64"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
</x-app-layout>
