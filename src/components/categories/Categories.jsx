import './Categories.css';

function Categories() {
  return (
    <div>
        <div class="d-flex flex-column flex-shrink-0 bg-light custom" >
          <a href="public/favicon.ico" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
            {/* <svg class="bi" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
            <h5>Kategoria</h5>
            <span class="visually-hidden">Icon-only</span>
          </a>
          <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li class="nav-item">
              <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <p class="bi">Student</p>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
              <p class="bi">Profesor</p>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                <p class="bi">Punonjes</p>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
              <p class="bi">Tjera</p>
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Categories;
