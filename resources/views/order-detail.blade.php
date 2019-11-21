<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Test Project B - Order Detail</title>



      <style>
      /* Border box */
* {
  box-sizing: border-box;
}

/* Prevent image breaking our layout */
img {
  max-width: 100%;
}

/* Grid: row */
.row {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: auto;
}

/* Row within column within row */
.row .row {
  width: auto;
  max-width: none;
  margin: 0 -10px;
}

/* Grid: column */
.col {
  padding: 0 10px;
  float: left;
}

/* Dividing into columns */
@media screen {
  .small-1 {
    width: 25%;
  }

  .small-2 {
    width: 50%;
  }

  .small-3 {
    width: 75%;
  }

  .small-4 {
    width: 100%;
  }
}
@media screen and (min-width: 600px) {
  .medium-1 {
    width: 25%;
  }

  .medium-2 {
    width: 50%;
  }

  .medium-3 {
    width: 75%;
  }

  .medium-4 {
    width: 100%;
  }
}
/* Placeholders */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}

nav ul li {
  float: left;
  padding-right: 10px;
}

.status-bar {
  list-style: none;
  padding: 0;
  overflow: auto;
  border-radius: 5px;
  background: #efefef;
}

.status-bar li {
  float: left;
  width: 33.3333%;
  padding: 0.5em;
  border-right: 1px solid #ccc;
}

.status-bar li:last-child {
  border-right: none;
}

.status-bar li.active {
  background: gold;
}

    </style>


</head>

<body>

  <div class="row">
  <nav class="small-4 col">
    <ul>
      <li><a href="#">Main Nav</a></li>
      <li><a href="#">Design Symbols</a></li>
      <li><a href="#">Pre-Orders</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </nav>
</div>

<div class="row">
  <main class="small-4 col">
    <h1>Order Detail for #ORDER1234</h1>

    <ol class="status-bar">
      <li class="active">Opened</li>
      <li>Prepared</li>
      <li>Closed/Delivered</li>
    </ol>

    <p>[Contact Information]</p>
    <ul class="product-list">
      <li>
        [Design Symbol ID]<br>
        [Product Type]<br>
        [Color option]<br>
      </li>
      <li>
        [Design Symbol ID]<br>
        [Product Type]<br>
        [Color option]<br>
      </li>
    </ul>
    <label>
      Remarks<br>
      <textarea name="remarks"></textarea>
    </label>

    <p>
      Status<br>
      <label>
        <input type="radio" name="status" checked>Opened
      </label>
      <label>
        <input type="radio" name="status">Prepared
      </label>
      <label>
        <input type="radio" name="status">Closed/Delivered
      </label>
    </p>

    <p><input type="submit"></p>

  </main>

</div>



</body>

</html>
