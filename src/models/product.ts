export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  available: boolean;
};

export class Products {
  async index(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM books";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get products. ${error}`);
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = "SELECT * FROM products WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot find product #${id}. ${error}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const sql =
        "INSERT INTO products (name, category, description, price, available) VALUES($1, $2, $3, $4, $5) RETURNING *";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [
        p.name,
        p.category,
        p.description,
        p.price,
        p.available,
      ]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (error) {
      throw new Error(`Cannot add new product #${p.name}. ${error}`);
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const sql = "DELETE FROM products WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (error) {
      throw new Error(`Cannot delete product #${id}. Error: ${error}`);
    }
  }
}
