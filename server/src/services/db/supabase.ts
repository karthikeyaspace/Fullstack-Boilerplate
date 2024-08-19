import supabase from "../../db/supabase";
import logger from "../../utils/logger";

// supabase crud

const createRow = async (table: string, data: any) => {
  try {
    const { data: row, error } = await supabase.from(table).insert(data);
    if (error) {
      logger("Error creating row", "server/services/db/supabase.ts", error);
      return { success: false };
    }
    return { success: true, data: row };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const readRow = async (table: string, id: string) => {
  try {
    const { data: row, error } = await supabase
      .from(table)
      .select("*")
      .eq("id", id)
      .single();
      
    if (error) {
      logger("Error reading row", "server/services/db/supabase.ts", error);
      return { success: false, data: null };
    }
    return { success: true, data: row };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

const readAllRows = async (table: string) => {
  try {
    const { data: rows, error } = await supabase.from(table).select();
    if (error) {
      logger("Error reading all rows", "server/services/db/supabase.ts", error);
      return { success: false, data: [] };
    }
    return { success: true, data: rows };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const readRowsByField = async (table: string, field: string, value: string) => {
  try {
    const { data: rows, error } = await supabase
      .from(table)
      .select()
      .eq(field, value);
    if (error) {
      logger(
        "Error reading rows by field",
        "server/services/db/supabase.ts",
        error
      );
      return { success: false, data: [] };
    }
    return { success: true, data: rows };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const updateRow = async (table: string, id: string, data: any) => {
  try {
    const { data: row, error } = await supabase
      .from(table)
      .update(data)
      .eq("id", id);
    if (error) {
      logger("Error updating row", "server/services/db/supabase.ts", error);
      return { success: false };
    }
    return { success: true, data: row };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const deleteRow = async (table: string, id: string) => {
  try {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) {
      logger("Error deleting row", "server/services/db/supabase.ts", error);
      return { success: false };
    }
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export {
  createRow,
  readRow,
  readAllRows,
  readRowsByField,
  updateRow,
  deleteRow,
};
