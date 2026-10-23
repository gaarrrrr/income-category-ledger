import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State for form input fields (replacing txtCatName and txtCatDesc DOM nodes)
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');

  // State for category list (replacing table body DOM innerHTML mutations)
  const [categories, setCategories] = useState([
    { id: 1, name: 'Consulting', description: 'Enterprise technical support contract' }
  ]);

  // Handler function replacing handleAddCategory()
  const handleAddCategory = (e) => {
    e.preventDefault();

    // Guard clause validation matching original JS logic
    if (!catName.trim() || !catDesc.trim()) {
      alert('Please complete both input fields.');
      return;
    }

    // Construct new category object
    const newCategory = {
      id: Date.now(),
      name: catName.trim(),
      description: catDesc.trim()
    };

    // Update state declaratively (immutably appending new row data)
    setCategories([...categories, newCategory]);

    // Reset input fields
    setCatName('');
    setCatDesc('');
  };

  // Optional enhancement: Delete category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="bg-light py-5 min-vh-100">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            {/* Registration Card Form */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-primary text-white py-3">
                <h1 className="h5 mb-0 fw-bold">Income Category Registration</h1>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleAddCategory}>
                  <div className="mb-3">
                    <label htmlFor="txtCatName" className="form-label fw-semibold">
                      Category Name
                    </label>
                    <input
                      type="text"
                      id="txtCatName"
                      className="form-control"
                      placeholder="e.g., Consulting"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="txtCatDesc" className="form-label fw-semibold">
                      Description
                    </label>
                    <input
                      type="text"
                      id="txtCatDesc"
                      className="form-control"
                      placeholder="e.g., Enterprise technical support contract"
                      value={catDesc}
                      onChange={(e) => setCatDesc(e.target.value)}
                    />
                  </div>
                  <button type="submit" id="btnAdd" className="btn btn-primary px-4 fw-semibold">
                    Save Category
                  </button>
                </form>
              </div>
            </div>

            {/* Ledger Table Card */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
                  Registered Categories
                </h2>
                <span className="badge bg-primary rounded-pill">
                  Total: {categories.length}
                </span>
              </div>
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" style={{ width: '35%' }}>Category Name</th>
                      <th scope="col">Description</th>
                      <th scope="col" className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody id="listIncomeCat">
                    {categories.length === 0 ? (
                      <tr>
                        <td colSpan="3" className="text-center text-muted py-4">
                          No registered categories found.
                        </td>
                      </tr>
                    ) : (
                      categories.map((item) => (
                        <tr key={item.id}>
                          <td className="fw-semibold text-dark">{item.name}</td>
                          <td className="text-secondary">{item.description}</td>
                          <td className="text-end">
                            <button
                              onClick={() => handleDeleteCategory(item.id)}
                              className="btn btn-outline-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;