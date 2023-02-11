export function eliminateUndefined(data: any[]) {
    const traverse = (obj: any) => {
      if (!obj) return null;
      if (Array.isArray(obj)) {
        const result: any[] = [];
        for (const item of obj) {
          const subResult = traverse(item);
          if (subResult) result.push(subResult);
        }
        return result.length > 0 ? result : null;
      } else if (typeof obj === "object") {
        const result: any = {};
        for (const key of Object.keys(obj)) {
          const value = traverse(obj[key]);
          if (value) result[key] = value;
        }
        return Object.keys(result).length > 0 ? result : null;
      }
      return obj;
    };
    return traverse(data);
  }