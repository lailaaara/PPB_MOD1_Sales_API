import { supabase } from "../config/supabaseClient.js";

export const RestockModel = {
  async getAll() {
    const { data, error } = await supabase
      .from("restocks")
      .select(`
        id, product_id, supplier_name, quantity, created_at,
        products ( id, sku, name, stock )
      `);
    if (error) throw error;
    return data;
  },

  async create({ product_id, supplier_name, quantity }) {
    // 1. Ambil data produk saat ini
    const { data: product, error: productError } = await supabase
      .from("products")
      .select("id, stock")
      .eq("id", product_id)
      .single();

    if (productError || !product) {
      throw new Error("Produk tidak ditemukan");
    }

    // 2. Hitung stok baru
    const newStock = (product.stock || 0) + Number(quantity);

    // 3. Update stok produk di tabel products
    const { error: updateError } = await supabase
      .from("products")
      .update({ stock: newStock })
      .eq("id", product_id);

    if (updateError) throw updateError;

    // 4. Catat transaksi restock ke tabel restocks
    const { data: restockData, error: restockError } = await supabase
      .from("restocks")
      .insert([{ product_id, supplier_name, quantity: Number(quantity) }])
      .select()
      .single();

    if (restockError) throw restockError;

    return {
      ...restockData,
      updated_stock: newStock
    };
  }
};
