import { beforeEach, describe, expect, test } from "vitest";
import { IPeople } from "@/interfaces/people.interface";
import { fetchPeople } from "@/shared/utils/peopleService/fetchPeople";

export type TStatusCode = 200 | 404;

const people: Pick<IPeople, "name">[] = [{ name: "SW" }];

const createFetchResponse = ({ ok, status }: { ok: boolean; status: TStatusCode }) => {
  return {
    ok,
    status,
    json() {
      return Promise.resolve<{ results: Pick<IPeople, "name">[] }>({
        results: people,
      });
    },
  };
};

describe("fetchPeople", () => {
  beforeEach(() => {});
  test("makes a GET request to fetchPeople", async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve(createFetchResponse({ ok: true, status: 200 }));
    });
    const people = await fetchPeople("");
    expect(people).toEqual(people);
  });
  test("failure fetchPeople", async () => {
    global.fetch = vi.fn().mockImplementation(() => {
      return Promise.resolve(createFetchResponse({ ok: false, status: 404 }));
    });
    await expect(fetchPeople("")).rejects.toThrow("404");
  });
});
